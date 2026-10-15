type OfferCardProps = {
  className?: string;
};

export default function OfferCard({ className = "" }: OfferCardProps) {
  return (
    <article className={`relative overflow-hidden rounded-xl bg-[#005037] px-6 py-8 text-white shadow-sm sm:flex sm:items-center sm:justify-between sm:px-10 ${className}`}>
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#b8e4ba_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="relative max-w-md">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d8edca]">Plant-powered welcome</p>
        <h2 className="mt-2 text-2xl font-black uppercase leading-[.95] tracking-[-0.05em] sm:text-3xl">Unlock 20% off your first order</h2>
        <p className="mt-3 text-xs leading-relaxed text-white/75">Join our protein club for a little extra fuel on your first vegan protein order.</p>
      </div>
      <a href="#protein-grid" className="relative mt-6 inline-flex rounded-full bg-[#17af26] px-6 py-3 text-[10px] font-bold uppercase tracking-wide transition hover:bg-[#128d20] sm:mt-0">Get 20% off</a>
    </article>
  );
}
