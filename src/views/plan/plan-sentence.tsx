import type { Plan } from "@/lib/plan";

const valueTone = {
  card: "text-cyan-on-dark",
  dialog: "text-cyan",
};

type Props = {
  chosen: Plan["chosen"];
  grindDisabled: boolean;
  tone: keyof typeof valueTone;
};

export default function PlanSentence({ chosen, grindDisabled, tone }: Props) {
  const value = (text: string | undefined) => (
    <span className={valueTone[tone]}>
      {text ?? (
        <>
          <span aria-hidden="true">_____</span>
          <span className="sr-only">not chosen</span>
        </>
      )}
    </span>
  );

  const named = (step: keyof Plan["chosen"]) =>
    chosen[step] && (chosen[step].summaryName ?? chosen[step].name);

  return (
    <>
      “I drink my coffee {chosen.drink?.summaryVerb ?? "as"}{" "}
      {value(named("drink"))}, with a {value(named("bean"))} type of bean.{" "}
      {value(named("quantity"))}
      {!grindDisabled && <> ground ala {value(named("grind"))}</>}, sent to me{" "}
      {value(named("deliveries"))}.”
    </>
  );
}
