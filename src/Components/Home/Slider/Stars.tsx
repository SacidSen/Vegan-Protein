type StarsProps = {
  rating: number;
};

export default function Stars({ rating }: StarsProps) {
  return (
    <div className="flex gap-0.5 text-[14px] leading-none text-[#f2bc1b]" aria-label={`${rating} of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => <span key={index} aria-hidden="true">★</span>)}
    </div>
  );
}
