import { ChevronDownIcon } from "@/components/icons";
import type { PlanStep } from "@/data";

type Props = {
  step: PlanStep;
  triggerId: string;
  panelId: string;
  selected: string | undefined;
  open: boolean;
  disabled: boolean;
  onToggle: () => void;
  onSelect: (optionId: string) => void;
};

export default function Question({
  step,
  triggerId,
  panelId,
  selected,
  open,
  disabled,
  onToggle,
  onSelect,
}: Props) {
  return (
    <li>
      <h3>
        <button
          id={triggerId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-disabled={disabled || undefined}
          onClick={onToggle}
          className="text-grey font-display text-h4/7 md:text-h3/12 xl:text-h2 relative flex h-14 w-full scroll-mt-10 items-start text-left aria-disabled:pointer-events-none aria-disabled:opacity-50 md:h-12"
        >
          <span className="max-w-60 md:max-w-none">{step.question}</span>

          <ChevronDownIcon
            className={`text-cyan absolute top-8.25 right-0 transition-transform motion-reduce:transition-none md:top-7 xl:top-7.5 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </h3>

      <div id={panelId} hidden={!open} className="mt-8 md:mt-10 xl:mt-14">
        <fieldset>
          <legend className="sr-only">{step.question}</legend>

          <div className="grid gap-y-4 md:grid-cols-3 md:gap-x-2.5 md:gap-y-0 xl:gap-x-5.75">
            {step.options.map((option) => (
              <label key={option.id} className="v-option">
                <input
                  type="radio"
                  name={step.id}
                  value={option.id}
                  checked={selected === option.id}
                  onChange={() => onSelect(option.id)}
                  className="sr-only"
                />

                <span className="font-display text-h4 block whitespace-nowrap">
                  {option.name}
                </span>

                <span className="text-body mt-2 block md:mt-6">
                  {option.description}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>
    </li>
  );
}
