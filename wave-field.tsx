export function WaveField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute -left-16 top-24 w-[42rem] text-wave/70 sm:left-0 sm:w-[48rem]"
        viewBox="0 0 720 360"
        fill="none"
      >
        <path
          d="M-40 210c90-70 160-40 230-8 90 40 140-30 220-55 95-30 170 20 250 8 70-10 140-50 180-30"
          stroke="currentColor"
          strokeWidth="22"
          strokeLinecap="round"
        />
        <path
          d="M-20 250c80-55 150-20 210 6 95 40 155-28 230-48 90-24 165 18 240 6"
          stroke="currentColor"
          strokeWidth="14"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
      <svg
        className="absolute -right-24 bottom-[-4rem] w-[46rem] text-wave sm:right-[-2rem] sm:w-[54rem]"
        viewBox="0 0 800 320"
        fill="none"
      >
        <path
          d="M20 210c90 55 170 20 250-10 95-36 150 40 240 28 100-14 170-70 290-20"
          stroke="currentColor"
          strokeWidth="70"
          strokeLinecap="round"
          opacity="0.45"
        />
        <path
          d="M0 250c110 40 190-10 280-28 110-22 160 48 260 32 90-14 170-58 280-8"
          stroke="currentColor"
          strokeWidth="36"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
