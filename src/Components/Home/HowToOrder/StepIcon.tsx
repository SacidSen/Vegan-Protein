import type { GuideIcon } from "./types";

type StepIconProps = { name: GuideIcon };

export default function StepIcon({ name }: StepIconProps) {
  const iconClassName = "h-12 w-12";

  if (name === "account") return <svg viewBox="0 0 56 56" fill="none" className={iconClassName} aria-hidden="true"><rect x="13" y="7" width="30" height="42" rx="3" stroke="currentColor" strokeWidth="3" /><path d="M20 7v7h16V7M21 24h14M21 30h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><rect x="22" y="35" width="14" height="10" rx="1" fill="#94D69E" /><path d="M29 37.5v5M26.5 40h5" stroke="#075438" strokeWidth="1.5" strokeLinecap="round" /></svg>;
  if (name === "bag") return <svg viewBox="0 0 56 56" fill="none" className={iconClassName} aria-hidden="true"><path d="M13 20h30v25a4 4 0 0 1-4 4H17a4 4 0 0 1-4-4V20Z" fill="#94D69E" stroke="currentColor" strokeWidth="3" /><path d="M20 20v-5a8 8 0 0 1 16 0v5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M32 31h5" stroke="white" strokeWidth="3" strokeLinecap="round" /><path d="m39 37 7 7-11 11-7-7 11-11Z" fill="white" stroke="currentColor" strokeWidth="2" /></svg>;
  if (name === "card") return <svg viewBox="0 0 56 56" fill="none" className={iconClassName} aria-hidden="true"><rect x="9" y="16" width="38" height="27" rx="4" fill="#94D69E" stroke="currentColor" strokeWidth="3" /><path d="M10 24h36M34 35h7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="m21 8 8 8-8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  return <svg viewBox="0 0 56 56" fill="none" className={iconClassName} aria-hidden="true"><path d="M28 7c4 6 7 7 13 8 1 6 3 10 8 14-4 5-5 9-5 15-6 1-10 3-14 7-5-4-9-5-15-5-1-6-3-10-7-14 4-5 5-9 5-15 6-1 10-3 15-10Z" fill="white" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="m20 31 5 5 12-14" stroke="#72BE7C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
