import { Link, Navigate, useParams } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { OrderSteps } from "./OrderFlow";

const money = (value: number) => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value);

export default function OrderComplete() {
  const { orderId } = useParams();
  const { lastOrder } = useCart();
  if (!lastOrder || lastOrder.number !== orderId) return <Navigate to="/cart" replace />;

  return (
    <div className="min-h-screen bg-white">
      <OrderSteps active={2} />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Your Order</h1>
          <span className="text-sm font-semibold text-green-700"><i className="bi bi-check-circle-fill mr-2" />Order placed</span>
        </div>
        <p className="mb-5 text-sm text-gray-500">Order {lastOrder.number}</p>
        <div className="divide-y divide-gray-100 border-y border-gray-100">
          {lastOrder.items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 py-5">
              <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.tone ?? "from-green-700 to-lime-300"}`}>
                <i className="bi bi-box-seam text-xl text-white" />
              </span>
              <span className="min-w-0 flex-1">
                <b className="block truncate text-sm">{item.name}</b>
                <small className="text-gray-500">Qty {item.quantity} &middot; {money(item.price)} each</small>
              </span>
              <b className="text-sm">{money(item.price * item.quantity)}</b>
            </div>
          ))}
        </div>
        <div className="ml-auto mt-6 max-w-sm space-y-3 text-sm">
          <p className="flex justify-between text-gray-600"><span>Subtotal</span><span>{money(lastOrder.subtotal)}</span></p>
          <p className="flex justify-between text-gray-600"><span>Shipping</span><span>{lastOrder.shipping ? money(lastOrder.shipping) : "Free"}</span></p>
          <p className="flex justify-between text-gray-600"><span>Discount</span><span>-{money(lastOrder.discount)}</span></p>
          <p className="flex justify-between border-t border-gray-200 pt-4 text-base font-bold"><span>Total</span><span>{money(lastOrder.total)}</span></p>
        </div>
        <div className="mt-10 border-t border-gray-100 pt-7 text-center">
          <p className="text-sm text-gray-500">Thanks for your order. We will send updates as it is prepared.</p>
          <Link to="/shop" className="mt-5 inline-flex rounded-full bg-green-600 px-8 py-3 text-sm font-semibold text-white hover:bg-green-700">Shop now</Link>
        </div>
      </main>
    </div>
  );
}
