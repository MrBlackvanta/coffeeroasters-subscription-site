import bgDesktop from "@/assets/plan/bg-steps-desktop.webp";
import bgMobile from "@/assets/plan/bg-steps-mobile.webp";
import bgTablet from "@/assets/plan/bg-steps-tablet.webp";
import StepList from "@/components/step-list";

export default function HowItWorks() {
  return (
    <section className="v-bleed-container bg-slate rounded-media text-cream relative isolate mt-30 overflow-hidden pt-20 pb-20 md:mt-36 md:py-24.25 lg:mt-42 lg:pt-25 lg:pb-25">
      <picture className="contents">
        <source
          media="(min-width: 64rem)"
          srcSet={bgDesktop.src}
          width={bgDesktop.width}
          height={bgDesktop.height}
        />
        <source
          media="(min-width: 48rem)"
          srcSet={bgTablet.src}
          width={bgTablet.width}
          height={bgTablet.height}
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

      <h2 className="sr-only">How it works</h2>

      <StepList tone="dark" />
    </section>
  );
}
