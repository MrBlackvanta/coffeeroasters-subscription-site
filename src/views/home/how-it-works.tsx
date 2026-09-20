import { steps } from "@/data";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <section className="v-container mt-30 md:mt-36 lg:mt-50 lg:px-21.25">
      <h2 className="font-display text-h4 text-grey text-center md:text-left">
        How it works
      </h2>

      <ol className="mt-20 grid gap-y-14 md:mt-10 md:grid-cols-3 md:gap-x-2.5 md:gap-y-0 lg:mt-20 lg:max-w-261.25 lg:gap-x-23.75">
        {steps.map(({ title, description }, index) => (
          <li key={title} className="relative text-center md:text-left">
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="v-step-rail hidden lg:block"
              />
            )}

            <span
              aria-hidden="true"
              className="border-cyan bg-cream relative hidden size-7.75 rounded-full border-2 md:mb-12 md:block lg:mb-16.75"
            />

            <p
              aria-hidden="true"
              data-step={`0${index + 1}`}
              className="v-step-number"
            />

            <h3 className="font-display text-h2-sm lg:text-h3 mt-6 md:mt-10.5 lg:mt-9.5 lg:max-w-63.75">
              {title}
            </h3>

            <p className="text-body-sm lg:text-body mt-6 md:mt-9.75 lg:mt-10.75">
              {description}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-20 flex justify-center md:mt-12 md:justify-start lg:mt-16">
        <Link href="/plan" className="v-btn">
          Create your plan
        </Link>
      </div>
    </section>
  );
}
