import Container from "../../Layouts/Container";

const benefits = [
  ["bi-flower1", "Complete plant protein", "Thoughtfully blended vegan protein with the essential amino acids your routine needs."],
  ["bi-shield-check", "Quality you can trust", "Clear ingredients, dependable sourcing and no unnecessary fillers in every scoop."],
  ["bi-heart-pulse", "Made for everyday", "Easy to shake, blend or bake—delicious protein that fits real life."],
  ["bi-truck", "Reliable delivery", "Your favourites are packed with care and delivered straight to your door."],
  ["bi-cup-straw", "Flavours worth craving", "Smooth textures and seriously good flavours that make consistency easy."],
  ["bi-recycle", "Kind to the planet", "Plant-based choices that help you fuel yourself with a lighter footprint."],
];

export default function WhyProtein() {
  return (
    <section className="bg-[#f2f6f4] py-16 sm:py-24">
      <Container>
        <div className="max-w-xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#169b31]">Why Vegan Fuel</p>
          <h2 className="mt-3 text-[30px] font-black uppercase leading-[.98] tracking-[-0.05em] text-[#1b1f28] sm:text-[42px]">What makes us your go-to vegan protein store?</h2>
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([icon, title, description]) => (
            <article key={title} className="border-t border-[#dce4df] pt-5">
              <i className={`bi ${icon} text-xl text-[#079527]`} aria-hidden="true" />
              <h3 className="mt-4 text-sm font-bold uppercase text-[#20242c]">{title}</h3>
              <p className="mt-2 max-w-[280px] text-xs leading-relaxed text-[#6d746f]">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
