import { headquartersHeading, offices } from "@/data";

export default function Headquarters() {
  return (
    <section className="v-container lg:max-w-content mt-30 pb-30 md:mt-36 md:pb-36 lg:mt-42 lg:pb-42">
      <h2 className="font-display text-h4 text-grey text-center md:text-left">
        {headquartersHeading}
      </h2>

      <ul className="mt-18 grid gap-y-20 md:grid-cols-3 md:gap-x-2.25 md:gap-y-0 lg:max-w-261.25 lg:gap-x-23.75">
        {offices.map(({ country, lines, Icon }) => (
          <li key={country} className="text-center md:text-left">
            <span className="flex justify-center md:h-12.5 md:items-end md:justify-start">
              <Icon className="text-cyan" />
            </span>

            <h3 className="font-display text-h2-sm/9 md:text-h4/9 xl:text-h3 mt-11.75 md:mt-12 lg:mt-11.25">
              {country}
            </h3>

            <address className="text-body mt-5.5 space-y-px not-italic md:mt-5.25 lg:mt-6">
              {lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </li>
        ))}
      </ul>
    </section>
  );
}
