import Stars from "./Stars";
import type { Testimonial } from "./types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="flex h-full min-h-[275px] flex-col rounded-[10px] border border-[#ededed] bg-white px-6 py-7 sm:min-h-[276px]">
      <div className="flex items-center gap-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full text-[8px] font-semibold text-white" style={{ backgroundColor: testimonial.avatarColor }} aria-hidden="true">
          {testimonial.initials}
        </span>
        <h3 className="text-[12px] font-medium text-[#151922]">{testimonial.name}</h3>
      </div>

      <div className="my-6 h-px bg-[#d8d8d8]" />
      <Stars rating={testimonial.rating} />
      <p className="mt-3 text-[12px] leading-[1.55] text-[#151922]">{testimonial.comment}</p>
      <time className="mt-auto pt-6 text-[10px] text-[#a4a7ad]">{testimonial.date}</time>
    </article>
  );
}
