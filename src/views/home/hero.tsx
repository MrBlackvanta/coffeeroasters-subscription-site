import heroDesktop from "@/assets/home/hero-desktop.webp";
import heroMobile from "@/assets/home/hero-mobile.webp";
import heroTablet from "@/assets/home/hero-tablet.webp";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="v-container rounded-media relative flex h-125 items-center overflow-hidden px-6 md:px-14.5 lg:h-150 lg:px-21.25">
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

      <div className="text-cream relative text-center md:text-left">
        <h1 className="font-display text-hero-sm md:text-hero-md lg:text-hero md:max-w-82.25 lg:max-w-123.25">
          Great coffee made simple.
        </h1>

        <p className="text-body-sm text-cream/80 lg:text-body mt-6.25 md:max-w-99.5 lg:mt-8.25 lg:max-w-111.25">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>

        <Link
          href="/plan"
          className="v-btn focus-visible:outline-cream mt-10 lg:mt-14"
        >
          Create your plan
        </Link>
      </div>
    </section>
  );
}
