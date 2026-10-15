type SliderNavigationProps = {
  onPrevious: () => void;
  onNext: () => void;
};

const buttonClassName = "absolute top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl leading-none text-[#737780] shadow-[0_3px_10px_rgba(0,0,0,0.12)] transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#004b35]";

export default function SliderNavigation({ onPrevious, onNext }: SliderNavigationProps) {
  return (
    <>
      <button type="button" onClick={onPrevious} className={`${buttonClassName} left-0 -translate-x-1/2`} aria-label="Previous testimonial">‹</button>
      <button type="button" onClick={onNext} className={`${buttonClassName} right-0 translate-x-1/2`} aria-label="Next testimonial">›</button>
    </>
  );
}
