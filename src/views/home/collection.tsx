import { coffees, collectionHeading } from "@/data";

export default function Collection() {
  return (
    <section className="relative isolate mt-30 pt-21.25 md:mt-36 md:pt-14.75 lg:mt-34 lg:pt-31.5">
      <h2 className="sr-only">{collectionHeading}</h2>
      <span
        aria-hidden="true"
        data-label={collectionHeading}
        className="v-watermark"
      />

      <ul className="v-container grid gap-y-12 md:gap-y-8 md:px-14.5 lg:grid-cols-4 lg:gap-x-7.5 lg:px-21.25">
        {coffees.map(({ name, description, image }) => (
          <li
            key={name}
            className="grid justify-items-center gap-y-6 text-center md:grid-cols-[15.9375rem_1fr] md:justify-items-stretch md:gap-x-9 md:gap-y-0 md:text-left lg:grid-cols-1 lg:justify-items-center lg:gap-y-18 lg:text-center"
          >
            <img
              src={image.src}
              width={image.width}
              height={image.height}
              alt=""
              loading="lazy"
              className="max-h-37.75 w-fit justify-self-center md:max-h-48.25"
            />

            <div className="max-w-70.5 md:mt-7.5 md:max-w-none lg:mt-0">
              <h3 className="font-display text-h4">{name}</h3>
              <p className="text-body-sm lg:text-body mt-4 md:mt-6">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
