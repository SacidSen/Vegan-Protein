import { useEffect, useState } from "react";

const OFFER_SECONDS = 23 * 60 * 60 + 15 * 60;

export default function Countdown() {
  const [secondsLeft, setSecondsLeft] = useState(OFFER_SECONDS);

  useEffect(() => {
    const timer = window.setInterval(() => setSecondsLeft((seconds) => Math.max(0, seconds - 1)), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const hours = Math.floor(secondsLeft / 3600).toString().padStart(2, "0");
  const minutes = Math.floor((secondsLeft % 3600) / 60).toString().padStart(2, "0");
  const seconds = (secondsLeft % 60).toString().padStart(2, "0");

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 bg-darkGreen px-4 py-2 text-center text-[10px] text-white sm:text-xs">
      <p className="text-grayLight">Limited offer: 30% OFF. Use RABBIT30 at checkout.</p>
      <span className="font-semibold tabular-nums" aria-live="off">{hours} : {minutes} : {seconds}</span>
    </div>
  );
}