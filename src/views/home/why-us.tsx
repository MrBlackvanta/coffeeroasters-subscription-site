import { benefits } from "@/data";

export default function WhyUs() {
  return (
    <section className="v-container relative mt-30 px-6 pt-16 md:mt-36 md:px-14.5 md:pt-14 lg:mt-50 lg:px-21.25 lg:pt-25">
      <div className="bg-slate rounded-media absolute inset-x-0 top-0 h-225.5 md:h-143.25 lg:h-144.25" />

      <div className="text-cream relative text-center">
        <h2 className="font-display text-h2-sm/7 md:text-h3/12 lg:text-h2 mx-auto max-w-135">
          Why choose us?
        </h2>

        <p className="text-body-sm text-cream/80 lg:text-body mx-auto mt-6 max-w-135 lg:mt-8">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>

        <ul className="mt-16 grid gap-6 md:mt-18 lg:mt-22 lg:grid-cols-3 lg:gap-7.5">
          {benefits.map(({ title, description, Icon }) => (
            <li
              key={title}
              className="bg-cyan rounded-card flex flex-col items-center pt-18 pb-12 md:flex-row md:py-10.25 md:ps-17.5 md:pe-12 md:text-left lg:flex-col lg:px-0 lg:pt-18 lg:pb-12 lg:text-center"
            >
              <span className="flex size-18 shrink-0 items-center justify-center md:size-14 lg:size-18">
                <Icon className="text-peach h-auto w-18 md:w-14 lg:w-18" />
              </span>

              <div className="mt-14 w-full max-w-63.75 md:ms-13.75 md:mt-0 md:max-w-none lg:ms-0 lg:mt-14 lg:max-w-63.75">
                <h3 className="font-display text-h4">{title}</h3>
                <p className="text-body md:text-body-sm lg:text-body mx-auto mt-6 max-w-53 md:mt-4 md:max-w-none lg:mt-6">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
