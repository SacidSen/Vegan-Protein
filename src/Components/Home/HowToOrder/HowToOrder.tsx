import GuideCard from "./GuideCard";
import OfferCard from "../OfferCard";
import type { GuideStep } from "./types";

const steps: GuideStep[] = [
  { number: "1", title: "Create an account", description: "Sign up in seconds and discover plant-based protein that fits your goals, routine and favourite flavours.", icon: "account" },
  { number: "2", title: "Choose your protein", description: "Explore vegan protein powders, select your flavour and pick the pack size that works best for you.", icon: "bag" },
  { number: "3", title: "Checkout securely", description: "Pay safely with your preferred payment method. Your order is protected from checkout to delivery.", icon: "card" },
  { number: "4", title: "Fuel your day", description: "Your vegan protein arrives at your door. Shake, blend or bake it into your everyday routine.", icon: "heart" },
];

export default function HowToOrder() {
  return (
    <section className="relative mt-20 bg-[#001b12] px-5 pb-16 pt-0 text-white sm:px-8 lg:pb-20">
      <div className="mx-auto max-w-[1000px]">
        <OfferCard className="-translate-y-12" />
        <div className="mx-auto -mt-4 max-w-[680px] text-center sm:mt-16">
          <h2 className="text-[28px] font-black uppercase leading-[1.05] tracking-[-0.04em] sm:text-[34px]">How to order vegan protein online</h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[9px] leading-[1.55] text-white/60">Ordering your plant-based protein is easy. Choose your favourite flavour and pack size, complete checkout securely and enjoy convenient delivery straight to your door.</p>
        </div>
        <div className="mt-12 grid gap-y-12 sm:mt-14 sm:grid-cols-2 sm:gap-y-16">{steps.map((step) => <GuideCard key={step.number} step={step} />)}</div>
        <div className="mt-12 flex justify-center sm:mt-16"><button type="button" className="rounded-full bg-[#08ad29] px-8 py-3 text-[10px] font-semibold transition hover:bg-[#079523]">Choose your protein</button></div>
      </div>
    </section>
  );
}
