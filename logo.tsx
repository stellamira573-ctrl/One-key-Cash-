import { cn } from "@/lib/utils";

export function KeylineMark({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("size-10", className)}
      aria-hidden="true"
    >
      <circle
        cx="20"
        cy="20"
        r="18"
        fill={inverted ? "none" : "currentColor"}
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path
        d="M14.2 11.4h4.2v6.15l5.35-6.15h5.05l-6.55 7.35 7 9.25h-5.15l-4.7-6.35-1 1.1v5.25h-4.2V11.4z"
        fill={inverted ? "currentColor" : "white"}
      />
    </svg>
  );
}

export function KeylineWordmark({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex items-center gap-2.5 font-semibold tracking-tight",
        inverted ? "text-paper" : "text-navy",
        className,
      )}
    >
      <KeylineMark inverted={inverted} className="size-9 sm:size-10" />
      <span className="text-lg sm:text-xl">Keyline</span>
    </span>
  );
}
