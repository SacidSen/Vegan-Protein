import { useMemo, useState } from "react";
import productsData from "../../../assets/protein-products.json";
import ProductCard from "./ProductCard";
import ProteinFilters from "./ProteinFilters";
import type { ProteinFilter, ProteinProduct } from "./types";

const products = productsData as ProteinProduct[];
const filters: ProteinFilter[] = ["All", "Plant Protein", "Vegan Protein", "Meal Replacement", "On Sale"];

export default function ProteinGrid() {
  const [activeFilter, setActiveFilter] = useState<ProteinFilter>("All");

  const recentProducts = useMemo(() => products
    .filter((product) => product.dateAdded && Date.parse(product.dateAdded) >= Date.now() - 30 * 24 * 60 * 60 * 1000)
    .sort((a, b) => Date.parse(b.dateAdded ?? "") - Date.parse(a.dateAdded ?? "")),
  []);


  const visibleProducts = useMemo(
    () => recentProducts.filter((product) => activeFilter === "All" || (activeFilter === "On Sale" ? Boolean(product.oldPrice) : product.category === activeFilter)),
    [activeFilter, recentProducts],
  );

  if (!recentProducts.length) return null;

  return (
    <section id="protein-grid" className="mx-auto w-full max-w-[1120px] px-5 py-16 sm:px-8 lg:py-24">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#169b31]">Fresh favourites</p>
      <h2 className="mt-3 text-[30px] font-black uppercase tracking-[-0.04em] text-[#1b1f28] sm:text-[38px]">Recently added</h2>
      <ProteinFilters activeFilter={activeFilter} filters={filters} onFilterChange={setActiveFilter} />

      <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-5">
        {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>

      {visibleProducts.length === 0 && <p className="py-12 text-center text-sm text-[#777c77]">No products match this filter.</p>}
    </section>
  );
}

