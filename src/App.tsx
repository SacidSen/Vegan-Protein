import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";

import Blog from "./Pages/Blog";
import Support from "./Pages/Support";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import OrderComplete from "./Pages/OrderComplete";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductDetail from "./Pages/ProductDetail";

import { CartProvider } from "./Context/CartContext";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/support" element={<Support />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:productId" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-complete/:orderId" element={<OrderComplete />} />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </MainLayout>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
