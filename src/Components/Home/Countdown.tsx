export default function Countdown() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 bg-darkGreen px-4 py-2 text-center text-[10px] text-white sm:text-xs">
      <p className="text-grayLight">Limited offer: 30% OFF. Use RABBIT30 at checkout.</p>
      <span className="font-semibold">23 : 15 : 00</span>
    </div>
  );
}
