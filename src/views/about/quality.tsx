import bgDesktop from "@/assets/about/bg-quality-desktop.webp";
import bgMobile from "@/assets/about/bg-quality-mobile.webp";
import bgTablet from "@/assets/about/bg-quality-tablet.webp";
import qualityDesktop from "@/assets/about/quality-desktop.webp";
import qualityMobile from "@/assets/about/quality-mobile.webp";
import qualityTablet from "@/assets/about/quality-tablet.webp";
import { quality } from "@/data";

export default function Quality() {
  return (
    <section className="v-container relative isolate mt-30 px-6 pt-55 pb-15.25 md:mt-36 md:px-18.5 md:pt-96 md:pb-16.75 lg:mt-42 lg:px-21.25 lg:pt-0 lg:pb-22">
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
          className="rounded-media absolute inset-x-0 top-19.5 -z-10 h-127.25 object-cover md:top-40 md:h-122 lg:top-22 lg:h-118.5"
        />
      </picture>

      <div className="lg:grid lg:grid-cols-[540fr_445fr] lg:items-start lg:gap-x-31.25">
        <div className="text-cream text-center lg:pt-44 lg:text-left">
          <h2 className="font-display text-h2-sm/7 md:text-h3/12 lg:text-h2">
            {quality.heading}
          </h2>

          <p className="text-body-sm text-cream/80 lg:text-body mt-6 lg:mt-8">
            {quality.body}
          </p>
        </div>

        <picture className="contents">
          <source
            media="(min-width: 64rem)"
            srcSet={qualityDesktop.src}
            width={qualityDesktop.width}
            height={qualityDesktop.height}
          />
          <source
            media="(min-width: 48rem)"
            srcSet={qualityTablet.src}
            width={qualityTablet.width}
            height={qualityTablet.height}
          />
          <img
            src={qualityMobile.src}
            width={qualityMobile.width}
            height={qualityMobile.height}
            alt=""
            loading="lazy"
            className="rounded-card absolute top-0 left-1/2 h-39 w-69.75 -translate-x-1/2 object-cover md:h-80 md:w-143.25 lg:static lg:h-118.5 lg:w-full lg:translate-x-0"
          />
        </picture>
      </div>
    </section>
  );
}
