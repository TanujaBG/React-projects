import { useState, useEffect } from "react";

import { HomePage } from "./pages/Home/HomePage";
import "./App.css";
import { Routes, Route } from "react-router";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";
import { OrdersPage } from "./pages/Orders/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { PageNotFound } from "./pages/PageNotFound";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
        <Route path="orders" element={<OrdersPage cart={cart} loadCart={loadCart} />} />
        <Route
          path="tracking/:orderId/:productId"
          element={<TrackingPage cart={cart} />}
        />
        <Route path="*" element={<PageNotFound cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
