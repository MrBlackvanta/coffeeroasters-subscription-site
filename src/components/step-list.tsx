import { steps } from "@/data";

const discFill = {
  light: "bg-cream",
  dark: "bg-transparent",
};

export default function StepList({ tone }: { tone: keyof typeof discFill }) {
  return (
    <ol className="grid gap-y-14 md:grid-cols-3 md:gap-x-2.5 md:gap-y-0 lg:max-w-261.25 lg:gap-x-23.75">
      {steps.map(({ title, description }, index) => (
        <li key={title} className="relative text-center md:text-left">
          {index < steps.length - 1 && (
            <span aria-hidden="true" className="v-step-rail hidden lg:block" />
          )}

          <span
            aria-hidden="true"
            className={`border-cyan relative hidden size-7.75 rounded-full border-2 md:mb-12 md:block lg:mb-16.75 ${discFill[tone]}`}
          />

          <p
            aria-hidden="true"
            data-step={`0${index + 1}`}
            className="v-step-number"
          />

          <h3 className="font-display text-h2-sm lg:text-h3 mt-6 md:mt-10.5 lg:mt-9.5 lg:max-w-63.75">
            {title}
          </h3>

          <p className="text-body-sm lg:text-body mt-6 whitespace-pre-line md:mt-9.75 lg:mt-10.75">
            {description}
          </p>
        </li>
      ))}
    </ol>
  );
}
