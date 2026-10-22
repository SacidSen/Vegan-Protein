import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductPouch from "../Components/Home/ProteinGrid/ProductPouch";
import type { ProteinProduct } from "../Components/Home/ProteinGrid/types";
import { useCart } from "../Context/CartContext";
import { getProduct, getProducts } from "../Services/products";
import OfferCard from "../Components/Home/OfferCard";

export default function ProductDetail() {
  const { productId = "" } = useParams();
  const [product, setProduct] = useState<ProteinProduct>();
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [suggestions, setSuggestions] = useState<ProteinProduct[]>([]);
  const [addedSuggestion, setAddedSuggestion] = useState<number | null>(null);
  const [shareMessage, setShareMessage] = useState("");
  const { addItem } = useCart();

  useEffect(() => {
    setProduct(undefined);
    setImageIndex(0);
    void getProduct(productId).then(setProduct);
  }, [productId]);

  useEffect(() => {
    void getProducts().then(setSuggestions);
  }, []);

  if (!product) return <div className="mx-auto max-w-6xl px-5 py-20 text-center"><p className="text-sm text-[#777]">Product not found.</p><Link to="/shop" className="mt-4 inline-block text-sm font-semibold text-[#17af26]">Back to shop</Link></div>;

  const images = product.images ?? [];
  const addToCart = () => {
    addItem({ id: `protein-${product.id}`, name: product.name, category: product.category, price: product.price, tone: product.tone });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 900);
  };
  const shareProduct = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title: product.name, url });
      else { await navigator.clipboard.writeText(url); setShareMessage("Product link copied."); }
    } catch {
      setShareMessage("Sharing was cancelled.");
    }
  };
  const suggestedProducts = suggestions.filter((item) => item.id !== product.id).slice(0, 4);

  return <div className="mx-auto max-w-[1180px] px-5 py-8 sm:px-8 sm:py-12">
    <nav className="mb-7 text-xs text-[#7b827d]"><Link to="/shop" className="hover:text-[#17af26]">Shop</Link><span className="mx-2">/</span>{product.name}</nav>
    <section className="grid gap-9 lg:grid-cols-2 lg:gap-14">
      <div>
        {images.length ? <div className="flex min-h-[360px] items-center justify-center rounded-2xl bg-[#f5f7f5] p-8 sm:min-h-[480px]"><img src={images[imageIndex]} alt={product.name} className="max-h-[430px] w-full object-contain" /></div> : <div className="[&>div]:h-[360px] sm:[&>div]:h-[480px]"><ProductPouch product={product} /></div>}
        {images.length > 1 && <div className="mt-3 flex gap-3">{images.map((image, index) => <button key={image} onClick={() => setImageIndex(index)} className={`h-16 w-16 rounded-lg border p-1 ${index === imageIndex ? "border-[#17af26]" : "border-[#e6ebe7]"}`} aria-label={`Show product image ${index + 1}`}><img src={image} alt="" className="h-full w-full object-contain" /></button>)}</div>}
      </div>
      <div className="py-2">
        <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#17af26]">{product.category}</p>
        <h1 className="mt-3 text-3xl font-black leading-tight tracking-[-.04em] text-[#202620] sm:text-4xl">{product.name}</h1>
        {product.rating > 0 && <p className="mt-4 text-sm"><span className="text-amber-400">&#9733;</span> <span className="font-semibold">{product.rating.toFixed(1)}</span><span className="ml-2 text-[#858c86]">({product.reviews} reviews)</span></p>}
        <div className="mt-5 flex items-baseline gap-3"><span className="text-2xl font-bold text-[#df6049]">&euro;{product.price.toFixed(2)}</span>{product.oldPrice && <span className="text-sm text-[#999] line-through">&euro;{product.oldPrice.toFixed(2)}</span>}{product.badge && <span className="rounded-full bg-[#fff5d9] px-2.5 py-1 text-[10px] font-bold text-[#96700a]">{product.badge}</span>}</div>
        <p className="mt-6 text-sm leading-7 text-[#626a64]" dangerouslySetInnerHTML={{ __html: product.description || `${product.flavour ? `${product.flavour} flavour. ` : ""}A delicious plant based protein blend made for your everyday routine.` }} />
        <div className="mt-6 grid grid-cols-2 gap-3">{product.protein && <Feature label="Protein" value={`${product.protein} per serving`} />}{product.servings > 0 && <Feature label="Pack" value={`${product.servings} servings`} />}<Feature label="Availability" value={product.available ? "In stock" : "Sold out"} /></div>
        <div className="mt-8 flex flex-wrap items-center gap-3"><div className="flex h-11 items-center rounded-full border border-[#e2e8e3]"><button className="h-10 w-10 text-lg" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">-</button><span className="w-7 text-center text-sm">{quantity}</span><button className="h-10 w-10 text-lg" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">+</button></div><button onClick={() => { for (let i = 0; i < quantity; i++) addToCart(); }} disabled={!product.available || added} className={`h-11 flex-1 rounded-full px-7 text-sm font-bold text-white transition-all duration-300 ${added ? "scale-[.98] bg-[#128d20] shadow-[0_0_0_4px_rgba(18,141,32,.15)]" : "bg-[#12a52b] hover:bg-[#0c8d22]"} disabled:bg-[#a6ada7]` }>{added ? "Added to cart" : product.available ? "Add to cart" : "Sold out"}</button></div>
        <div className="mt-6 space-y-2 border-t border-[#edf0ed] pt-5 text-xs text-[#737b74]"><p><i className="bi bi-truck mr-2 text-[#17af26]" />Fast, tracked delivery</p><p><i className="bi bi-shield-check mr-2 text-[#17af26]" />Secure checkout</p><p><i className="bi bi-arrow-repeat mr-2 text-[#17af26]" />Quality guaranteed</p></div>
      </div>
    </section>
    <section className="mt-12 border-t border-[#edf0ed] pt-8 sm:mt-16 sm:pt-10">
      <div className="grid gap-5 rounded-2xl border border-[#e9efe9] bg-white p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-7">
        <div><p className="text-base font-bold text-[#202620]">Share the good stuff</p><p className="mt-2 max-w-2xl text-xs leading-6 text-[#707971]">Know someone who would like this? Share this product page with them and help them find their next favourite shake.</p><div className="mt-4 flex flex-wrap gap-2 text-[10px] text-[#526057]"><span className="rounded-full bg-[#f2f7f2] px-3 py-2"><i className="bi bi-truck mr-1 text-[#17af26]" />Tracked delivery</span><span className="rounded-full bg-[#f2f7f2] px-3 py-2"><i className="bi bi-shield-check mr-1 text-[#17af26]" />Secure checkout</span></div></div>
        <div className="sm:text-right"><button type="button" onClick={() => void shareProduct()} className="rounded-full bg-[#17af26] px-5 py-3 text-xs font-bold text-white hover:bg-[#128d20]">Share product <i className="bi bi-share ml-1" /></button>{shareMessage && <p className="mt-2 text-[10px] text-[#667168]" role="status">{shareMessage}</p>}</div>
      </div>
    </section>
    {suggestedProducts.length > 0 && <section id="protein-grid" className="mt-12 border-t border-[#edf0ed] pt-8 sm:mt-14 sm:pt-10">
      <div className="mb-5 flex items-end justify-between"><div><p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#17af26]">Picked for you</p><h2 className="mt-1 text-xl font-black tracking-tight text-[#202620]">Featured products</h2></div><Link to="/shop" className="text-xs font-semibold text-[#17af26] hover:underline">Shop all</Link></div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">{suggestedProducts.map((item) => <article key={item.id} className="min-w-0 rounded-xl border border-[#edf0ed] bg-white p-2.5 sm:p-3"><Link to={`/shop/${item.slug || item.id}`} className="block"><ProductPouch product={item} /><p className="mt-3 line-clamp-2 min-h-9 text-[11px] font-semibold leading-5 text-[#252b27]">{item.name}</p></Link><p className="mt-1 text-[10px] text-[#818982]"><span className="text-amber-400">&#9733;</span> {item.rating} <span className="mx-1">·</span>{item.reviews} reviews</p><div className="mt-2 flex items-center justify-between gap-2"><span className="text-xs font-bold text-[#df6049]">&euro;{item.price.toFixed(2)}</span><button type="button" disabled={!item.available || addedSuggestion === item.id} onClick={() => { addItem({ id: `protein-${item.id}`, name: item.name, category: item.category, price: item.price, tone: item.tone }); setAddedSuggestion(item.id); window.setTimeout(() => setAddedSuggestion(null), 900); }} className={`rounded-full px-3 py-2 text-[9px] font-bold text-white transition-all duration-300 ${addedSuggestion === item.id ? "scale-95 bg-[#128d20]" : "bg-[#17af26] hover:bg-[#128d20]"} disabled:bg-[#a6ada7]`}>{addedSuggestion === item.id ? "Added!" : "Add"}</button></div></article>)}</div>
    </section>}
    <section className="mt-12 sm:mt-14"><OfferCard /></section>
  </div>;
}

function Feature({ label, value }: { label: string; value: string }) { return <div className="rounded-xl bg-[#f5f8f5] p-4"><p className="text-[10px] uppercase tracking-wider text-[#89918a]">{label}</p><p className="mt-1 text-sm font-semibold text-[#303832]">{value}</p></div>; }
