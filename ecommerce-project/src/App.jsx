import { HomePage } from "./pages/HomePage";
import "./App.css";
import { Routes, Route } from "react-router";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking" element={<TrackingPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
