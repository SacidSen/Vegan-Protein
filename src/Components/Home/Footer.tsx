import Container from "../../Layouts/Container";

const columns = [
  { title: "Shop", links: ["All protein", "Plant protein", "Vegan protein", "Bundles"] },
  { title: "Help", links: ["Shipping & delivery", "Returns", "Contact us", "FAQs"] },
  { title: "About", links: ["Our story", "Protein journal", "Ingredients", "Sustainability"] },
];

function Footer() {
  return (
    <footer className="bg-[#001b12] py-14 text-white sm:py-16">
      <Container className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-8">
        <div><a href="/" className="text-xl font-black uppercase tracking-[-0.06em]">Vegan Fuel</a><p className="mt-4 max-w-xs text-xs leading-relaxed text-white/60">Tasty, straightforward plant protein for your everyday routine.</p><div className="mt-5 flex gap-3 text-base text-white/80"><a href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a><a href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a><a href="#" aria-label="TikTok"><i className="bi bi-tiktok" /></a></div></div>
        {columns.map((column) => <div key={column.title}><h2 className="text-xs font-bold uppercase tracking-wider text-white">{column.title}</h2><ul className="mt-4 space-y-3">{column.links.map((link) => <li key={link}><a className="text-xs text-white/60 transition hover:text-white" href={link === "Protein journal" ? "/blog" : "#protein-grid"}>{link}</a></li>)}</ul></div>)}
      </Container>
      <Container className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-[10px] text-white/45 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Vegan Fuel. All rights reserved.</p><div className="flex gap-4"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></div></Container>
    </footer>
  )
}

export default Footer
