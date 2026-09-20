import {
  type PlanOption,
  type PlanStep,
  type PlanStepId,
  planSteps,
  shipmentPrices,
  shipmentsPerMonth,
} from "@/data";

export type PlanSelection = Partial<Record<PlanStepId, string>>;

export type Plan = {
  steps: PlanStep[];
  chosen: Partial<Record<PlanStepId, PlanOption>>;
  grindDisabled: boolean;
  firstUnanswered: PlanStepId | undefined;
  monthlyPrice: number;
};

const defaultQuantity = "250g";

export function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

function shipmentPrice(quantity: string | undefined, delivery: string) {
  return shipmentPrices[quantity ?? defaultQuantity][delivery];
}

function withShipmentPrices(step: PlanStep, quantity: string | undefined) {
  return {
    ...step,
    options: step.options.map((option) => ({
      ...option,
      description: `${formatPrice(shipmentPrice(quantity, option.id))} per shipment. ${option.description}`,
    })),
  };
}

export function derivePlan(selection: PlanSelection): Plan {
  const steps = planSteps.map((step) =>
    step.id === "deliveries"
      ? withShipmentPrices(step, selection.quantity)
      : step,
  );

  const chosen: Plan["chosen"] = {};
  for (const step of steps) {
    const option = step.options.find(({ id }) => id === selection[step.id]);
    if (option) chosen[step.id] = option;
  }

  const grindDisabled = chosen.drink?.skipsGrind === true;
  if (grindDisabled) delete chosen.grind;

  const required = steps.filter(({ id }) => !(grindDisabled && id === "grind"));

  return {
    steps,
    chosen,
    grindDisabled,
    firstUnanswered: required.find(({ id }) => !chosen[id])?.id,
    monthlyPrice: chosen.deliveries
      ? shipmentPrice(selection.quantity, chosen.deliveries.id) *
        shipmentsPerMonth[chosen.deliveries.id]
      : 0,
  };
}
