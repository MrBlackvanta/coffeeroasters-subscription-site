import danche from "@/assets/home/danche.webp";
import granEspresso from "@/assets/home/gran-espresso.webp";
import piccollo from "@/assets/home/piccollo.webp";
import planalto from "@/assets/home/planalto.webp";
import { CoffeeBeanIcon, GiftIcon, TruckIcon } from "@/components/icons";

export const collectionHeading = "Our collection";

export const coffees = [
  {
    name: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience.",
    image: granEspresso,
  },
  {
    name: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
    image: planalto,
  },
  {
    name: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
    image: piccollo,
  },
  {
    name: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
    image: danche,
  },
];

export const benefits = [
  {
    title: "Best quality",
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    Icon: CoffeeBeanIcon,
  },
  {
    title: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
    Icon: GiftIcon,
  },
  {
    title: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    Icon: TruckIcon,
  },
];

export const steps = [
  {
    title: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    title: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    title: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning\nworld-class coffees curated to provide a distinct tasting experience.",
  },
];
