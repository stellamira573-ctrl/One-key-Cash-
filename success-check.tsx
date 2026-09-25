export function SuccessCheck() {
  return (
    <div className="relative mx-auto grid size-20 place-items-center">
      <span className="success-ring absolute inset-0 rounded-full bg-success-soft" />
      <span className="relative grid size-12 place-items-center rounded-full bg-success text-paper">
        <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
          <path
            className="check-path"
            d="M5.5 12.4l4.4 4.4L18.6 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="sr-only">Confirmed</span>
    </div>
  );
}
