import Container from "../../Layouts/Container";
import IconCard from "./IconCard";

export default function IconsCards() {
  return (
    <section className="bg-grayOff">
      <Container className="grid gap-2 py-8 md:grid-cols-3 md:gap-6 md:py-0">
        <IconCard svgClass="truck" title="Reliable Shipping" description="Fast, tracked delivery directly to your door. Shipping is free for orders over €49." />
        <IconCard svgClass="lock" title="You’re Safe With Us" description="Our secure checkout makes ordering your favourite protein simple and protected." />
        <IconCard svgClass="heart-pulse" title="Plant-Based Quality" description="Vegan protein blends with great taste, thoughtful ingredients and transparent pricing." />
      </Container>
    </section>
  );
}
