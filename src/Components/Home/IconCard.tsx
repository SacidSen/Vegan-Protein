type IconCardProps = {
  svgClass?: string;
  title: string;
  description: string;
};

export default function IconCard({ svgClass, title, description }: IconCardProps) {
  return (
    <article className="flex gap-4 py-5 sm:gap-5 sm:py-8 md:py-20">
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white sm:h-14 sm:w-14 after:absolute after:top-10 after:h-[2px] after:w-5 after:rounded-xl after:bg-grayLight sm:after:top-11"><i className={`bi bi-${svgClass} text-xl sm:text-2xl`} /></div>
      <div><h3 className="mb-2 text-lg font-semibold text-darkGreen sm:text-xl">{title}</h3><p className="text-sm leading-relaxed text-gray">{description}</p></div>
    </article>
  );
}
