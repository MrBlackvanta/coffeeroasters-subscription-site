export const planHero = {
  heading: "Create a plan",
  body: "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.",
};

export type PlanStepId = "drink" | "bean" | "quantity" | "grind" | "deliveries";

export type PlanOption = {
  id: string;
  name: string;
  description: string;
  summaryName?: string;
  summaryVerb?: string;
  skipsGrind?: boolean;
};

export type PlanStep = {
  id: PlanStepId;
  navLabel: string;
  question: string;
  options: PlanOption[];
};

export const planSteps: PlanStep[] = [
  {
    id: "drink",
    navLabel: "Preferences",
    question: "How do you drink your coffee?",
    options: [
      {
        id: "capsule",
        name: "Capsule",
        summaryName: "Capsules",
        summaryVerb: "using",
        skipsGrind: true,
        description: "Compatible with Nespresso systems and similar brewers",
      },
      {
        id: "filter",
        name: "Filter",
        summaryVerb: "as",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        id: "espresso",
        name: "Espresso",
        summaryVerb: "as",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    id: "bean",
    navLabel: "Bean Type",
    question: "What type of coffee?",
    options: [
      {
        id: "single-origin",
        name: "Single Origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        id: "decaf",
        name: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        id: "blended",
        name: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    id: "quantity",
    navLabel: "Quantity",
    question: "How much would you like?",
    options: [
      {
        id: "250g",
        name: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        id: "500g",
        name: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        id: "1000g",
        name: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    id: "grind",
    navLabel: "Grind Option",
    question: "Want us to grind them?",
    options: [
      {
        id: "wholebean",
        name: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
      },
      {
        id: "filter",
        name: "Filter",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        id: "cafetiere",
        name: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    id: "deliveries",
    navLabel: "Deliveries",
    question: "How often should we deliver?",
    options: [
      {
        id: "weekly",
        name: "Every week",
        summaryName: "Every Week",
        description: "Includes free first-class shipping.",
      },
      {
        id: "fortnightly",
        name: "Every 2 weeks",
        summaryName: "Every 2 Weeks",
        description: "Includes free priority shipping.",
      },
      {
        id: "monthly",
        name: "Every month",
        summaryName: "Every Month",
        description: "Includes free priority shipping.",
      },
    ],
  },
];

export const shipmentPrices: Record<string, Record<string, number>> = {
  "250g": { weekly: 7.2, fortnightly: 9.6, monthly: 12 },
  "500g": { weekly: 13, fortnightly: 17.5, monthly: 22 },
  "1000g": { weekly: 22, fortnightly: 32, monthly: 42 },
};

export const shipmentsPerMonth: Record<string, number> = {
  weekly: 4,
  fortnightly: 2,
  monthly: 1,
};

export const confirmation = {
  heading: "Order Summary",
  body: "Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.",
  action: "Checkout",
  success: "Thanks! Your plan is confirmed and your coffee is on its way.",
};
