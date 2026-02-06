import { DeliveryOptions } from "./DeliveryOptions.jsx";
import { CartItemDetails } from "./CartItemDetails.jsx";
import { DeliveryDate } from "./DeliveryDate.jsx";

export function OrderSummary({ cart, deliveryOptions }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate
                cartItem={cartItem}
                deliveryOptions={deliveryOptions}
              />

              <div className="cart-item-details-grid">
                <CartItemDetails cartItem={cartItem} />
                <DeliveryOptions
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
