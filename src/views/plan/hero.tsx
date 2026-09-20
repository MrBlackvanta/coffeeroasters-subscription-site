import heroDesktop from "@/assets/plan/hero-desktop.webp";
import heroMobile from "@/assets/plan/hero-mobile.webp";
import heroTablet from "@/assets/plan/hero-tablet.webp";
import { planHero } from "@/data";

export default function Hero() {
  return (
    <section className="v-container rounded-media relative flex h-100 items-center overflow-hidden px-6 pb-9 md:px-14.5 md:pb-0 lg:h-112.5 lg:px-21.25">
      <picture className="contents">
        <source
          media="(min-width: 64rem)"
          srcSet={heroDesktop.src}
          width={heroDesktop.width}
          height={heroDesktop.height}
        />
        <source
          media="(min-width: 48rem)"
          srcSet={heroTablet.src}
          width={heroTablet.width}
          height={heroTablet.height}
        />
        <img
          src={heroMobile.src}
          width={heroMobile.width}
          height={heroMobile.height}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover"
        />
      </picture>

      <div className="absolute inset-0 bg-black/40" />

      <div className="text-cream relative text-center md:text-left">
        <h1 className="font-display text-hero-sm md:text-hero-md lg:text-hero">
          {planHero.heading}
        </h1>

        <p className="text-body-sm text-cream/80 lg:text-body mt-5.5 md:mt-6 md:max-w-99.5 lg:mt-8 lg:max-w-111.25">
          {planHero.body}
        </p>
      </div>
    </section>
  );
}
