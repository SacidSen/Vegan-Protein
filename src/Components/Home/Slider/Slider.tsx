import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper/types";
import testimonialsData from "../../../assets/testimonials.json";
import ReviewSummaryCard from "./ReviewSummaryCard";
import SliderNavigation from "./SliderNavigation";
import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "./types";

import "swiper/css";

const testimonials = testimonialsData as Testimonial[];

export default function Slider() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section className="overflow-hidden bg-[#fdfcfb] px-4 py-12 sm:px-8 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="mb-10 text-[32px] font-black uppercase tracking-[-0.035em] text-[#1b1f28] sm:text-[42px] lg:mb-12 lg:text-[43px]">Customer Testimonials</h2>

        <div className="grid gap-5 lg:grid-cols-[248px_minmax(0,1fr)]">
          <ReviewSummaryCard />

          <div className="relative min-w-0">
            <Swiper modules={[Navigation]} onSwiper={(swiper) => { swiperRef.current = swiper; }} slidesPerView={1.08} spaceBetween={20} breakpoints={{ 640: { slidesPerView: 1.65 }, 900: { slidesPerView: 2.05 }, 1200: { slidesPerView: 2.35 } }} className="!overflow-visible">
              {testimonials.map((testimonial) => <SwiperSlide key={testimonial.id} className="h-auto"><TestimonialCard testimonial={testimonial} /></SwiperSlide>)}
            </Swiper>
            <SliderNavigation onPrevious={() => swiperRef.current?.slidePrev()} onNext={() => swiperRef.current?.slideNext()} />
          </div>
        </div>
      </div>
    </section>
  );
}
