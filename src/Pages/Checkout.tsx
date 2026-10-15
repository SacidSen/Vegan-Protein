import { useState, type FormEvent } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { OrderSteps } from "./OrderFlow";

const money = (value: number) => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value);

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  wide?: boolean;
};

function Field({ label, name, type = "text", autoComplete, required = false, wide = false }: FieldProps) {
  return (
    <label className={`block ${wide ? "sm:col-span-2" : ""}`}>
      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#778079]">{label}{required && <span className="ml-1 text-[#169b31]">*</span>}</span>
      <input name={name} type={type} autoComplete={autoComplete} required={required} className="checkout-input" />
    </label>
  );
}

export default function Checkout() {
  const { items, subtotal, discount, applyCoupon, placeOrder, lastOrder } = useCart();
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");
  const [couponMessage, setCouponMessage] = useState("");

  if (!items.length) return <Navigate to={lastOrder ? `/order-complete/${lastOrder.number}` : "/cart"} replace />;

  const shipping = subtotal >= 50 ? 0 : 4.95;
  const total = Math.max(0, subtotal + shipping - discount);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    navigate(`/order-complete/${placeOrder()}`);
  }

  return (
    <div className="min-h-screen bg-[#f8faf8] pb-14">
      <OrderSteps active={1} />
      <div className="mx-auto grid max-w-[1120px] items-start gap-10 px-5 py-9 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
        <section>
          <div className="mb-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#169b31]">Almost there</p>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.045em] text-[#1b1f28] sm:text-4xl">Checkout</h1>
            <p className="mt-2 text-sm text-[#7d847e]">Add your details to finish your order.</p>
          </div>

          <form id="checkout-form" onSubmit={submit} className="space-y-9">
            <section aria-labelledby="contact-heading">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e7f2e9] text-xs font-bold text-[#147b2b]">01</span>
                <h2 id="contact-heading" className="text-base font-bold text-[#20242c]">Contact details</h2>
              </div>
              <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
                <Field label="First name" name="firstName" autoComplete="given-name" required />
                <Field label="Last name" name="lastName" autoComplete="family-name" required />
                <Field label="Email address" name="email" type="email" autoComplete="email" required wide />
                <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" wide />
              </div>
            </section>

            <section aria-labelledby="shipping-heading">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e7f2e9] text-xs font-bold text-[#147b2b]">02</span>
                <h2 id="shipping-heading" className="text-base font-bold text-[#20242c]">Shipping address</h2>
              </div>
              <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
                <Field label="Street address" name="address" autoComplete="street-address" required wide />
                <Field label="City" name="city" autoComplete="address-level2" required />
                <Field label="Postal code" name="postalCode" autoComplete="postal-code" required />
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#778079]">Country <span className="text-[#169b31]">*</span></span>
                  <select name="country" autoComplete="country-name" required defaultValue="" className="checkout-input">
                    <option value="" disabled>Select your country</option>
                    <option>Germany</option><option>Austria</option><option>Netherlands</option><option>France</option><option>Other</option>
                  </select>
                </label>
              </div>
            </section>

            <section aria-labelledby="payment-heading">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e7f2e9] text-xs font-bold text-[#147b2b]">03</span>
                <h2 id="payment-heading" className="text-base font-bold text-[#20242c]">Payment method</h2>
              </div>
              <label className="flex cursor-pointer items-center gap-3 rounded-xl bg-white px-4 py-4 shadow-[0_2px_12px_rgba(22,50,30,0.04)]">
                <input type="radio" name="payment" defaultChecked className="h-4 w-4 accent-[#17af26]" />
                <span className="flex-1"><b className="block text-sm font-semibold text-[#303632]">Pay on delivery</b><span className="mt-1 block text-xs text-[#8b918d]">Payment provider can be connected here.</span></span>
                <i className="bi bi-shield-check text-lg text-[#169b31]" />
              </label>
            </section>

            <label className="flex cursor-pointer items-start gap-2 text-xs leading-5 text-[#6e766f]">
              <input required type="checkbox" className="mt-1 h-3.5 w-3.5 shrink-0 accent-[#17af26]" />
              <span>I confirm my order and accept the terms of sale.</span>
            </label>
            <button form="checkout-form" className="w-full rounded-full bg-[#17af26] px-5 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(23,175,38,0.16)] transition hover:-translate-y-0.5 hover:bg-[#128d20]">
              Place order <span className="mx-2 text-white/60">|</span> {money(total)}
            </button>
          </form>
        </section>

        <aside className="h-fit rounded-2xl bg-white p-5 shadow-[0_8px_32px_rgba(22,50,30,0.06)] sm:p-6 lg:sticky lg:top-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-[#20242c]">Your order</h2>
            <Link to="/cart" className="text-xs font-semibold text-[#169b31] hover:text-[#0d7e21]">Edit cart</Link>
          </div>
          <div className="mt-5 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <span className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.tone ?? "from-[#4a7349] to-[#b1cf82]"}`}>
                  <i className="bi bi-cup-straw text-lg text-white/90" />
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#20242c] px-1 text-[9px] font-bold text-white">{item.quantity}</span>
                </span>
                <span className="min-w-0 flex-1"><b className="block truncate text-xs font-semibold text-[#303632]">{item.name}</b><small className="mt-1 block text-[10px] text-[#929893]">{item.category}</small></span>
                <b className="text-xs text-[#303632]">{money(item.price * item.quantity)}</b>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-2">
            <input value={coupon} onChange={(event) => setCoupon(event.target.value)} aria-label="Coupon code" placeholder="Coupon code" className="min-w-0 flex-1 rounded-full bg-[#f5f7f5] px-4 py-2.5 text-xs text-[#303632] outline-none placeholder:text-[#a3aaa4] focus:ring-2 focus:ring-[#17af26]/20" />
            <button type="button" onClick={() => setCouponMessage(applyCoupon(coupon) ? "Coupon applied: 10% off" : "Try WELCOME10")} className="rounded-full bg-[#eaf6ec] px-4 text-xs font-bold text-[#16852a] transition hover:bg-[#ddf0e0]">Apply</button>
          </div>
          {couponMessage && <p className="mt-2 text-xs text-[#16852a]" role="status">{couponMessage}</p>}

          <div className="mt-6 space-y-3 text-xs text-[#7c847d]">
            <p className="flex justify-between"><span>Subtotal</span><span className="font-semibold text-[#303632]">{money(subtotal)}</span></p>
            <p className="flex justify-between"><span>Shipping</span><span className="font-semibold text-[#303632]">{shipping ? money(shipping) : "Free"}</span></p>
            <p className="flex justify-between"><span>Discount</span><span className="font-semibold text-[#303632]">-{money(discount)}</span></p>
          </div>
          <div className="mt-5 flex items-center justify-between rounded-xl bg-[#f5f8f5] px-4 py-4">
            <span className="text-sm font-bold text-[#20242c]">Total</span>
            <span className="text-lg font-black tracking-tight text-[#169b31]">{money(total)}</span>
          </div>
          <p className="mt-4 flex items-center gap-2 text-[10px] text-[#939a94]"><i className="bi bi-lock-fill text-[#169b31]" />Secure checkout</p>
        </aside>
      </div>
    </div>
  );
}
