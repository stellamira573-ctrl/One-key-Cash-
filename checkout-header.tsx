import { KeylineWordmark } from "@/components/logo";

export function CheckoutHeader({ kicker = "Secure Checkout" }: { kicker?: string }) {
  return (
    <header className="relative overflow-hidden rounded-2xl bg-navy text-paper shadow-soft">
      <svg
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-[62%] text-navy-mid"
        viewBox="0 0 640 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M40 120c110-8 150-78 250-86 110-8 150 52 240 44 70-6 80-42 130-46v88H40z"
          fill="currentColor"
        />
        <path
          d="M120 120c90-4 130-58 220-64 100-6 140 44 230 36 50-4 60-30 90-32v60H120z"
          className="fill-navy"
          opacity="0.55"
        />
      </svg>
      <div className="relative flex min-h-16 items-center gap-3 px-4 py-3 sm:min-h-[4.5rem] sm:gap-4 sm:px-6">
        <KeylineWordmark inverted />
        <span className="h-6 w-px shrink-0 bg-paper/35 sm:h-7" aria-hidden="true" />
        <p className="truncate text-sm font-medium tracking-wide text-paper/90 sm:text-base">
          {kicker}
        </p>
      </div>
    </header>
  );
}
