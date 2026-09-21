import bgModalTop from "@/assets/plan/bg-modal-top.webp";
import { confirmation } from "@/data";
import { type Plan, formatPrice } from "@/lib/plan";
import { type RefObject, useEffect } from "react";

import PlanSentence from "./plan-sentence";

export const checkoutValue = "checkout";

type Props = {
  ref: RefObject<HTMLDialogElement | null>;
  chosen: Plan["chosen"];
  grindDisabled: boolean;
  monthlyPrice: number;
  onClose: () => void;
};

export default function ConfirmDialog({
  ref,
  chosen,
  grindDisabled,
  monthlyPrice,
  onClose,
}: Props) {
  const price = `${formatPrice(monthlyPrice)} / mo`;

  useEffect(() => {
    const node = ref.current;
    node?.addEventListener("close", onClose);
    return () => node?.removeEventListener("close", onClose);
  }, [ref, onClose]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="confirm-heading"
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      className="bg-cream text-ink rounded-card m-auto w-[calc(100%-3rem)] max-w-81.75 overflow-hidden backdrop:bg-black/50 md:max-w-135"
    >
      <div className="bg-ink relative isolate h-22 px-6 pt-7 md:h-34 md:px-14 md:pt-12">
        <img
          src={bgModalTop.src}
          width={bgModalTop.width}
          height={bgModalTop.height}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-10 size-full object-cover"
        />

        <h2
          id="confirm-heading"
          className="font-display text-h2-sm md:text-h2 text-white"
        >
          {confirmation.heading}
        </h2>
      </div>

      <div className="px-6 pb-6 md:px-14 md:pb-14">
        <p className="font-display text-h4/10 text-grey mt-10 md:mt-14.25">
          <PlanSentence
            chosen={chosen}
            grindDisabled={grindDisabled}
            tone="dialog"
          />
        </p>

        <p className="text-body-sm text-ink/80 md:text-body md:mt-1.75">
          {confirmation.body}
        </p>

        <div className="mt-6 md:mt-11.75 md:flex md:h-14 md:items-center md:justify-between">
          <p className="font-display text-h3 hidden md:block">{price}</p>

          <form method="dialog">
            <button
              type="submit"
              value={checkoutValue}
              className="v-btn w-full md:w-54.25"
            >
              {confirmation.action}
              <span className="md:hidden">&nbsp;- {price}</span>
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
