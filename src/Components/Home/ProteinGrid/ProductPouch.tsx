import type { ProteinProduct } from "./types";

type ProductPouchProps = {
  product: ProteinProduct;
};

export default function ProductPouch({ product }: ProductPouchProps) {
  return (
    <div className="relative flex h-[180px] items-center justify-center overflow-hidden rounded-md bg-[#f5f6f4]">
      {product.images?.[0] && <img src={product.images[0]} alt={product.name} className="absolute inset-0 h-full w-full object-contain p-3" />}
      <div className="absolute bottom-0 h-12 w-full rounded-t-[50%] bg-[#edf1ec]" />

      {product.badge && (
        <span className="absolute left-0 top-0 z-10 bg-[#f2bc1b] px-3 py-1 text-[8px] font-bold uppercase text-white">
          {product.badge}
        </span>
      )}

      {!product.images?.[0] && <div className={`relative z-10 flex h-[124px] w-[88px] -rotate-3 flex-col rounded-b-2xl rounded-t-lg border border-white/40 bg-gradient-to-br ${product.tone} px-2 pt-4 text-center shadow-lg`}>
        <span className="text-[7px] font-bold tracking-[0.18em] text-white/85">VEGAN</span>
        <span className="mt-1 text-[12px] font-black leading-none text-white">FUEL</span>
        <span className="mb-3 mt-auto text-[7px] font-medium text-white/80">{product.flavour}</span>
      </div>}

      {!product.available && (
        <span className="absolute z-20 rounded-full bg-[#8e918f]/80 px-4 py-2 text-[9px] text-white">
          Out of Stock
        </span>
      )}
    </div>
  );
}
