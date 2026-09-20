import bgDesktop from "@/assets/plan/bg-summary-desktop.webp";
import bgMobile from "@/assets/plan/bg-summary-mobile.webp";
import type { Plan } from "@/lib/plan";

import PlanSentence from "./plan-sentence";

type Props = {
  chosen: Plan["chosen"];
  grindDisabled: boolean;
  complete: boolean;
  onSubmit: () => void;
};

export default function OrderSummary({
  chosen,
  grindDisabled,
  complete,
  onSubmit,
}: Props) {
  return (
    <div className="mt-30 md:mt-36 xl:mt-22">
      <section className="bg-slate rounded-media relative isolate overflow-hidden px-6.25 py-8 md:min-h-52 md:px-11 md:py-6.75 xl:px-16">
        <picture className="contents">
          <source
            media="(min-width: 48rem)"
            srcSet={bgDesktop.src}
            width={bgDesktop.width}
            height={bgDesktop.height}
          />
          <img
            src={bgMobile.src}
            width={bgMobile.width}
            height={bgMobile.height}
            alt=""
            loading="lazy"
            className="absolute inset-0 -z-10 size-full object-cover"
          />
        </picture>

        <h3 className="text-body text-grey-on-dark uppercase">Order summary</h3>

        <p className="font-display text-h4/10 text-cream mt-2">
          <PlanSentence
            chosen={chosen}
            grindDisabled={grindDisabled}
            tone="card"
          />
        </p>
      </section>

      <div className="mt-14 flex justify-center md:mt-10 xl:justify-end">
        <button
          type="button"
          aria-disabled={!complete || undefined}
          onClick={onSubmit}
          className="v-btn w-54.25"
        >
          Create my plan!
        </button>
      </div>
    </div>
  );
}
