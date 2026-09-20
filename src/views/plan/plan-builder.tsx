"use client";

import type { PlanStepId } from "@/data";
import holdPageBehind from "@/lib/hold-page-behind";
import { type PlanSelection, derivePlan } from "@/lib/plan";
import { useRef, useState } from "react";

import ConfirmDialog from "./confirm-dialog";
import OrderSummary from "./order-summary";
import Question from "./question";
import StepNav from "./step-nav";

const triggerId = (step: PlanStepId) => `question-${step}`;
const panelId = (step: PlanStepId) => `options-${step}`;

export default function PlanBuilder() {
  const [selection, setSelection] = useState<PlanSelection>({});
  const [openSteps, setOpenSteps] = useState<PlanStepId[]>(["drink"]);
  const [activeStep, setActiveStep] = useState<PlanStepId>("drink");
  const dialog = useRef<HTMLDialogElement>(null);
  const releasePage = useRef<(() => void) | null>(null);

  const { steps, chosen, grindDisabled, firstUnanswered, monthlyPrice } =
    derivePlan(selection);

  function revealStep(step: PlanStepId) {
    setOpenSteps((open) => (open.includes(step) ? open : [...open, step]));
    setActiveStep(step);
    document.getElementById(triggerId(step))?.focus();
  }

  function toggleStep(step: PlanStepId) {
    setOpenSteps((open) =>
      open.includes(step) ? open.filter((id) => id !== step) : [...open, step],
    );
    setActiveStep(step);
  }

  function chooseOption(step: PlanStepId, optionId: string) {
    setSelection((current) => ({ ...current, [step]: optionId }));
    setActiveStep(step);
  }

  function submit() {
    if (firstUnanswered) return revealStep(firstUnanswered);
    releasePage.current = holdPageBehind();
    dialog.current?.showModal();
  }

  function releaseOnClose() {
    releasePage.current?.();
    releasePage.current = null;
  }

  return (
    <section className="v-container mt-30 pb-30 md:mt-36 md:pb-36 lg:mt-42 lg:px-21.25 lg:pb-42 xl:px-0">
      <h2 className="sr-only">Build your plan</h2>

      <div className="xl:max-w-content xl:mx-auto xl:grid xl:grid-cols-[auto_1fr] xl:items-start xl:gap-x-31.25">
        <StepNav
          steps={steps}
          activeStep={activeStep}
          disabledStep={grindDisabled ? "grind" : undefined}
          onSelect={revealStep}
        />

        <div>
          <ol className="space-y-24 md:space-y-25 xl:space-y-22">
            {steps.map((step) => {
              const disabled = grindDisabled && step.id === "grind";

              return (
                <Question
                  key={step.id}
                  step={step}
                  triggerId={triggerId(step.id)}
                  panelId={panelId(step.id)}
                  selected={selection[step.id]}
                  open={openSteps.includes(step.id) && !disabled}
                  disabled={disabled}
                  onToggle={() => toggleStep(step.id)}
                  onSelect={(optionId) => chooseOption(step.id, optionId)}
                />
              );
            })}
          </ol>

          <OrderSummary
            chosen={chosen}
            grindDisabled={grindDisabled}
            complete={!firstUnanswered}
            onSubmit={submit}
          />
        </div>
      </div>

      <ConfirmDialog
        ref={dialog}
        chosen={chosen}
        grindDisabled={grindDisabled}
        monthlyPrice={monthlyPrice}
        onClose={releaseOnClose}
      />
    </section>
  );
}
