import heroDesktop from "@/assets/about/hero-desktop.webp";
import heroMobile from "@/assets/about/hero-mobile.webp";
import heroTablet from "@/assets/about/hero-tablet.webp";
import { aboutHero } from "@/data";

export default function Hero() {
  return (
    <section className="v-container rounded-media relative flex h-100 items-center overflow-hidden px-6 md:px-14.5 lg:h-112.5 lg:px-21.25">
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

      <div className="text-cream relative pt-6 text-center md:pt-0 md:text-left">
        <h1 className="font-display text-h2-sm/7 md:text-h3/10 lg:text-h2">
          {aboutHero.heading}
        </h1>

        <p className="text-body-sm text-cream/80 lg:text-body lg:text-cream mt-6 md:max-w-99.5 lg:max-w-111.25">
          {aboutHero.body}
        </p>
      </div>
    </section>
  );
}
