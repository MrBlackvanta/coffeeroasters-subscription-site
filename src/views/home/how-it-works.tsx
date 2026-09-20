import StepList from "@/components/step-list";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <section className="v-container mt-30 pb-30 md:mt-36 md:pb-36 lg:mt-50 lg:px-21.25 lg:pb-50">
      <h2 className="font-display text-h4 text-grey mb-20 text-center md:mb-10 md:text-left lg:mb-20">
        How it works
      </h2>

      <StepList tone="light" />

      <div className="mt-20 flex justify-center md:mt-12 md:justify-start lg:mt-16">
        <Link href="/plan" className="v-btn">
          Create your plan
        </Link>
      </div>
    </section>
  );
}
