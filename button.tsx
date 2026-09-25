import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-[background-color,transform,box-shadow,color] duration-150 ease-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action disabled:pointer-events-none disabled:opacity-50 active:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "rounded-full bg-action text-paper shadow-soft hover:bg-action-hover",
        secondary:
          "rounded-full bg-paper text-navy shadow-outline hover:bg-ice",
        ghost: "rounded-full text-link hover:bg-ice-2/60",
        link: "rounded-none p-0 font-semibold text-link hover:underline",
      },
      size: {
        lg: "h-12 min-h-12 px-7 text-base",
        md: "h-11 min-h-11 px-5 text-sm",
        sm: "h-10 min-h-10 px-4 text-sm",
        inline: "h-auto min-h-0 px-0 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode;
  };

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
