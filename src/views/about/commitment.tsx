import commitmentDesktop from "@/assets/about/commitment-desktop.webp";
import commitmentMobile from "@/assets/about/commitment-mobile.webp";
import commitmentTablet from "@/assets/about/commitment-tablet.webp";
import { commitment } from "@/data";

export default function Commitment() {
  return (
    <section className="v-container mt-30 md:mt-36 lg:mt-42 lg:px-21.25">
      <div className="md:grid md:grid-cols-[17.5625rem_1fr] md:items-start md:gap-x-17.25 lg:grid-cols-[445fr_540fr] lg:items-center lg:gap-x-31.25">
        <picture className="contents">
          <source
            media="(min-width: 64rem)"
            srcSet={commitmentDesktop.src}
            width={commitmentDesktop.width}
            height={commitmentDesktop.height}
          />
          <source
            media="(min-width: 48rem)"
            srcSet={commitmentTablet.src}
            width={commitmentTablet.width}
            height={commitmentTablet.height}
          />
          <img
            src={commitmentMobile.src}
            width={commitmentMobile.width}
            height={commitmentMobile.height}
            alt=""
            loading="lazy"
            className="rounded-card h-100 w-full object-cover md:h-117.5 lg:h-130"
          />
        </picture>

        <div className="mt-12 text-center md:mt-2 md:text-left lg:mt-0">
          <h2 className="font-display text-h3/12 lg:text-h2">
            {commitment.heading}
          </h2>

          <p className="text-body-sm text-ink/80 lg:text-body mt-7.5 lg:mt-8">
            {commitment.body}
          </p>
        </div>
      </div>
    </section>
  );
}
