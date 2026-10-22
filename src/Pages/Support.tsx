import { Link } from "react-router-dom";

const topics = [
  { icon: "bi-box-seam", title: "Orders & delivery", text: "Most orders leave our warehouse within 1–2 working days. Once yours is on the way, you’ll get a tracking link by email. Standard delivery usually takes 2–4 working days." },
  { icon: "bi-arrow-repeat", title: "Changes & returns", text: "Need to update an order? Get in touch quickly and we’ll do our best before it ships. Unopened products can be returned within 30 days of delivery." },
  { icon: "bi-cup-hot", title: "Products & ingredients", text: "Our blends are plant-based and made for everyday routines. Check each product page for ingredients, allergens, nutrition details, and flavour notes." },
  { icon: "bi-credit-card", title: "Payments & discounts", text: "Checkout supports common debit and credit cards. Add a valid discount code in your cart before placing your order; only one code can be used per order." },
];

export default function Support() {
  return (
    <div className="bg-[#f7f9f6]">
      <section className="bg-[#173b25] px-5 py-16 text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8d9ad]">Vegan Fuel care</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">Good help for your everyday fuel.</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">From delivery questions to choosing your next favourite flavour, here are a few useful details to get you moving.</p>
          <a href="#help-topics" className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-[#173b25] transition hover:bg-[#e8f3e7]">Browse help topics <i className="bi bi-arrow-down ml-2" /></a>
        </div>
      </section>
      <section id="help-topics" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#169b31]">The essentials</p><h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-[#202a23]">How can we help?</h2></div><p className="max-w-md text-sm leading-6 text-[#737d75]">A quick guide to the things people ask us about most.</p></div>
        <div className="grid gap-4 sm:grid-cols-2">{topics.map((topic) => <article key={topic.title} className="rounded-2xl border border-[#e8ede7] bg-white p-6 sm:p-8"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf4e9] text-lg text-[#168b2e]"><i className={`bi ${topic.icon}`} /></span><h3 className="mt-5 text-lg font-extrabold text-[#243229]">{topic.title}</h3><p className="mt-3 text-sm leading-7 text-[#707970]">{topic.text}</p></article>)}</div>
        <div className="mt-10 flex flex-col justify-between gap-5 rounded-3xl bg-[#e9f2e8] p-7 sm:flex-row sm:items-center sm:p-10"><div><p className="text-xs font-bold uppercase tracking-wider text-[#43834c]">Still wondering?</p><h2 className="mt-2 text-2xl font-black text-[#203b27]">A real person can help.</h2><p className="mt-2 text-sm text-[#5d6d60]">Drop us a message and our team will be happy to point you in the right direction.</p></div><Link to="/contact" className="shrink-0 rounded-full bg-[#183b25] px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-[#169b31]">Contact the team <i className="bi bi-arrow-up-right ml-1" /></Link></div>
      </section>
    </div>
  );
}