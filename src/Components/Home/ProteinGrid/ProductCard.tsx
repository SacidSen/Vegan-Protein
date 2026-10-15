import ProductPouch from "./ProductPouch";
import type { ProteinProduct } from "./types";
import { useCart } from "../../../Context/CartContext";

type ProductCardProps = {
  product: ProteinProduct;
};

const weights = ["500g", "1kg", "2kg"];

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  return (
    <article className="min-w-0">
      <ProductPouch product={product} />

      <div className="px-0.5 pt-4 text-center">
        <p className="mb-1 text-[8px] uppercase tracking-wide text-[#a4a7a5]">{product.category}</p>
        <h3 className="mx-auto h-9 max-w-[190px] text-[11px] font-medium leading-[1.45] text-[#20242c]">{product.name}</h3>
        <p className="mt-1 text-[9px] text-[#6f746f]">{product.flavour}</p>

        <div className="mt-2 flex justify-center gap-1 text-[9px]">
          <span className="text-[#f2bc1b]">★</span>
          <span>{product.rating}/5</span>
          <span className="text-[#b0b2b1]">|</span>
          <span className="text-[#939793]">{product.reviews} Reviews</span>
        </div>

        <div className="mt-2 flex justify-center gap-2 text-[8px] text-[#7d827e]">
          <span>{product.protein} protein</span>
          <span>{product.servings} servings</span>
        </div>

        <div className="mt-3 flex items-baseline justify-center gap-1">
          <span className="text-[11px] font-semibold text-[#e25d42]">€{product.price.toFixed(2)}</span>
          {product.oldPrice && <span className="text-[8px] text-[#a6a9a7] line-through">€{product.oldPrice.toFixed(2)}</span>}
        </div>

        <div className="my-3 flex justify-center gap-1">
          {weights.map((weight) => <button key={weight} type="button" className="rounded-sm border border-[#e7e8e6] px-1.5 py-1 text-[8px] text-[#626762]">{weight}</button>)}
        </div>

        <button type="button" onClick={() => addItem({ id: `protein-${product.id}`, name: product.name, category: product.category, price: product.price, tone: product.tone })} disabled={!product.available} className="rounded-full bg-[#09ad2a] px-5 py-1.5 text-[9px] font-semibold text-white transition hover:bg-[#079523] disabled:cursor-not-allowed disabled:bg-[#b4b7b4]">
          {product.available ? "Add to Cart" : "Sold Out"}
        </button>
      </div>
    </article>
  );
}
