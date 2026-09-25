# Detect the non-white ticket/printable region and crop excess page whitespace.
mask = np.min(arr, axis=2) < 245
ys, xs = np.where(mask)
left, top, right, bottom = xs.min(), ys.min(), xs.max() + 1, ys.max() + 1

pad = 12
cropped = img.crop((
    max(0, left-pad), max(0, top-pad),
    min(img.width, right+pad), min(img.height, bottom+pad)
))

# Place the ticket centered on an A4 page with print-safe margins.
page_w, page_h = A4
margin = 36
scale = min(
    (page_w - 2*margin) / cropped.width,
    (page_h - 2*margin) / cropped.height
)
draw_w = cropped.width * scale
draw_h = cropped.height * scale
x = (page_w - draw_w) / 2
y = (page_h - draw_h) / 2

out = "/mnt/data/" + filename
c = canvas.Canvas(out, pagesize=A4)
c.setTitle(os.path.splitext(filename)[0])
c.setFillColor(white)
c.rect(0, 0, page_w, page_h, stroke=0, fill=1)
c.drawImage(
    ImageReader(cropped), x, y,
    width=draw_w, height=draw_h,
    preserveAspectRatio=True, mask="auto"
)
c.showPage()
c.save()
created.append(out)

