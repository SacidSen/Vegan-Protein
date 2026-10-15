import Container from "../../Layouts/Container";

const articles = [
  { title: "How much protein do you really need?", description: "A simple guide to finding the amount that supports your goals and daily movement.", icon: "bi-calculator" },
  { title: "Plant protein: your everyday basics", description: "Everything to know about making plant-powered protein part of your routine.", icon: "bi-flower1" },
  { title: "Three easy high-protein smoothie ideas", description: "Quick, satisfying blends for busy mornings, post-workout fuel and more.", icon: "bi-cup-straw" },
];

export default function ProteinEducation() {
  return (
    <section className="border-t border-[#e5e9e6] py-16 sm:py-24">
      <Container>
        <div className="flex items-end justify-between gap-5">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#169b31]">The journal</p><h2 className="mt-3 text-[30px] font-black uppercase tracking-[-0.05em] text-[#1b1f28] sm:text-[42px]">Protein education</h2></div>
          <a href="/blog" className="mb-1 shrink-0 text-xs font-bold text-[#078b26] underline underline-offset-4">View all</a>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {articles.map((article, index) => (
            <a key={article.title} href="/blog" className="group overflow-hidden rounded-lg border border-[#e1e7e2] bg-white transition hover:-translate-y-1 hover:shadow-md">
              <div className={`flex h-36 items-center justify-center bg-gradient-to-br ${index === 0 ? "from-[#dff0d8] to-[#94bd79]" : index === 1 ? "from-[#d6ebea] to-[#70afa1]" : "from-[#f3e5bb] to-[#d29d55]"}`}><i className={`bi ${article.icon} text-5xl text-white/90`} aria-hidden="true" /></div>
              <div className="p-5"><p className="text-[9px] font-bold uppercase tracking-[0.13em] text-[#15932e]">Vegan Fuel guide</p><h3 className="mt-2 text-base font-bold leading-snug text-[#20242c]">{article.title}</h3><p className="mt-2 text-xs leading-relaxed text-[#707670]">{article.description}</p><span className="mt-4 inline-block text-xs font-bold text-[#078b26]">Read article <span aria-hidden="true">→</span></span></div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
