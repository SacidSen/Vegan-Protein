import Container from "../../Layouts/Container";

export default function Teaser() {
  return (
    <section>
      <div className="relative flex min-h-[560px] items-center bg-cover bg-center sm:min-h-[650px]" style={{ backgroundImage: "url('/BG_Home.png')" }}>
        <div className="absolute inset-0 bg-[#002016]/30" />
        <Container className="relative flex flex-col gap-4 py-20 text-white sm:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-yellow-400 sm:text-sm">Best Seller</p>
          <h1 className="max-w-[680px] text-3xl font-bold leading-[1.05] sm:text-5xl">BEST VEGAN PROTEIN POWDER FOR YOUR EVERYDAY ROUTINE</h1>
          <p className="text-sm sm:text-base">Plant-based protein. Big flavour. Simple ingredients.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"><p>Get 25% off</p><span className="hidden h-3 w-px bg-grayMuted sm:block" /><p>Free shipping from €49</p></div>
          <a className="mt-2 max-w-fit rounded-3xl bg-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-darkGreen" href="#protein-grid">Shop all protein</a>
        </Container>
      </div>
    </section>
  );
}
