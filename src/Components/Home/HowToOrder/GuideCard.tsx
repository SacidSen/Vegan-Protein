import StepIcon from "./StepIcon";
import type { GuideStep } from "./types";

type GuideCardProps = { step: GuideStep };

export default function GuideCard({ step }: GuideCardProps) {
  return (
    <article className="relative px-3 text-center sm:px-6">
      <span className="absolute left-3 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#f2bc1b] text-[10px] font-bold text-[#002016] sm:left-6">{step.number}</span>
      <div className="flex justify-center pt-2 text-white"><StepIcon name={step.icon} /></div>
      <h3 className="mt-4 text-[13px] font-bold uppercase text-white">{step.title}</h3>
      <p className="mx-auto mt-4 max-w-[230px] text-[9px] leading-[1.55] text-white/60">{step.description}</p>
    </article>
  );
}
