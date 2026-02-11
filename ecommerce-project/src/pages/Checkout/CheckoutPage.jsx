import { useEffect, useState } from "react";
import "./Checkout.css";
import { CheckoutHeader } from "./CheckoutHeader.jsx";
import axios from "axios";
import { OrderSummary } from "./OrderSummary.jsx";
import { PaymentSummary } from "./PaymentSummary.jsx";

export function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    /* axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        setDeliveryOptions(response.data);
      });

    */
    const getDeliveryOptions = async () => {
      const response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime",
      );
      setDeliveryOptions(response.data);
    };
    getDeliveryOptions();
  }, []);

  useEffect(() => {
    /*
    axios.get("api/payment-summary").then((response) => {
      setPaymentSummary(response.data);
    });
    */

    const getPaymentSummary = async () => {
      const response = await axios.get("api/payment-summary");
      setPaymentSummary(response.data);
    };

    getPaymentSummary();
  }, [cart]);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/images/cart-favicon.png" />
      <title>Checkout</title>
      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            cart={cart}
            deliveryOptions={deliveryOptions}
            loadCart={loadCart}
          />
          {paymentSummary && <PaymentSummary paymentSummary={paymentSummary} />}
        </div>
      </div>
    </>
  );
}
