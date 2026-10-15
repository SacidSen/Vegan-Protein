import Stars from "./Stars";

export default function ReviewSummaryCard() {
  return (
    <aside className="flex min-h-[276px] flex-col rounded-[10px] bg-[#004b35] px-7 py-7 text-white">
      <h3 className="max-w-[170px] text-[20px] font-bold uppercase leading-[1.24]">Voted Best Online Dispensary in Canada</h3>
      <div className="my-5 h-px bg-white/15" />
      <p className="text-[21px] font-medium tracking-[-0.04em] text-white/55">Google</p>

      <div className="mt-auto">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em]">Excellent</p>
        <div className="flex items-center gap-3">
          <Stars rating={5} />
          <span className="h-3 w-px bg-white/30" />
          <p className="text-[10px] text-white/70">on <span className="text-white/45">135 Reviews</span></p>
        </div>
      </div>
    </aside>
  );
}
