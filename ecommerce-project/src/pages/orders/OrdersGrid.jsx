import { OrderHeader } from "./OrderHeader.jsx";
import { OrdersDetailsGrid } from "./OdersDetailsGrid.jsx";

export function OrdersGrid({ orders }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <OrderHeader order={order} />

            <OrdersDetailsGrid order={order} />
          </div>
        );
      })}
    </div>
  );
}
