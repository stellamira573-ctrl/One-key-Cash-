import type { ReactNode } from "react";
import { CheckoutHeader } from "@/components/checkout-header";
import { WaveField } from "@/components/wave-field";
import { cn } from "@/lib/utils";

export function PageShell({
  children,
  kicker,
  wide = false,
}: {
  children: ReactNode;
  kicker?: string;
  wide?: boolean;
}) {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-ice text-ink">
      <WaveField />
      <div
        className={cn(
          "relative mx-auto flex min-h-dvh flex-col px-3 pb-16 pt-3 sm:px-6 sm:pt-5",
          wide ? "max-w-5xl" : "max-w-3xl",
        )}
      >
        <CheckoutHeader kicker={kicker} />
        <div className="flex flex-1 flex-col items-center pt-8 sm:pt-12">{children}</div>
      </div>
    </div>
  );
}
