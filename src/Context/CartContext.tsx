import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type CartProduct = { id: string; name: string; category: string; price: number; tone?: string };
export type CartItem = CartProduct & { quantity: number };
type CartContextValue = {
  items: CartItem[]; itemCount: number; subtotal: number; discount: number;
  addItem: (product: CartProduct) => void; updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void; applyCoupon: (code: string) => boolean;
  placeOrder: () => string; lastOrder: { number: string; items: CartItem[]; subtotal: number; discount: number; shipping: number; total: number } | null;
};
const CartContext = createContext<CartContextValue | undefined>(undefined);
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [discount, setDiscount] = useState(0);
  const [lastOrder, setLastOrder] = useState<CartContextValue["lastOrder"]>(null);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const value = useMemo<CartContextValue>(() => ({
    items, itemCount: items.reduce((count, item) => count + item.quantity, 0), subtotal, discount, lastOrder,
    addItem: (product) => setItems((current) => { const existing = current.find((item) => item.id === product.id); return existing ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }]; }),
    updateQuantity: (id, quantity) => setItems((current) => quantity < 1 ? current.filter((item) => item.id !== id) : current.map((item) => item.id === id ? { ...item, quantity } : item)),
    removeItem: (id) => setItems((current) => current.filter((item) => item.id !== id)),
    applyCoupon: (code) => { if (code.trim().toUpperCase() !== "WELCOME10") return false; setDiscount(Math.round(subtotal * 0.1 * 100) / 100); return true; },
    placeOrder: () => { const shipping = subtotal >= 50 ? 0 : subtotal > 0 ? 4.95 : 0; const number = `VF-${Date.now().toString().slice(-8)}`; setLastOrder({ number, items: [...items], subtotal, discount, shipping, total: Math.max(0, subtotal + shipping - discount) }); setItems([]); setDiscount(0); return number; },
  }), [items, subtotal, discount, lastOrder]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() { const context = useContext(CartContext); if (!context) throw new Error("useCart must be used within a CartProvider"); return context; }
