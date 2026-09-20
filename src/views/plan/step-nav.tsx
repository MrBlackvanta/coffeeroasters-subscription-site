import type { PlanStep, PlanStepId } from "@/data";

type Props = {
  steps: PlanStep[];
  activeStep: PlanStepId;
  disabledStep: PlanStepId | undefined;
  onSelect: (id: PlanStepId) => void;
};

export default function StepNav({
  steps,
  activeStep,
  disabledStep,
  onSelect,
}: Props) {
  return (
    <nav aria-label="Plan steps" className="hidden xl:block xl:w-63.75">
      <ol className="divide-grey/25 divide-y">
        {steps.map((step, index) => {
          const active = step.id === activeStep;

          return (
            <li key={step.id} className="py-6 first:pt-0 last:pb-0">
              <button
                type="button"
                aria-current={active ? "step" : undefined}
                aria-disabled={step.id === disabledStep || undefined}
                onClick={() => onSelect(step.id)}
                className="font-display text-h4 group flex w-full items-center text-left aria-disabled:pointer-events-none aria-disabled:opacity-20"
              >
                <span
                  className={`w-14.5 ${active ? "text-cyan" : "text-grey"}`}
                >
                  0{index + 1}
                </span>

                <span
                  className={`transition-[color] ${active ? "text-ink" : "text-grey group-hover:text-ink"}`}
                >
                  {step.navLabel}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
