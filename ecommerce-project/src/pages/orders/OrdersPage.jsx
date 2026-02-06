import "./OrdersPage.css";
import { Header } from "../../components/Header.jsx";
import { Link } from "react-router";
import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { OrdersGrid } from "./OrdersGrid.jsx";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    /*axios.get("api/orders?expand=products").then((response) => {
      setOrders(response.data);
    });*/

    const fetchOrders = async () => {
      const response = await axios.get("api/orders?expand=products");
      setOrders(response.data);
    };

    fetchOrders();
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/images/orders-favicon.png" />
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid orders={orders} />
      </div>
    </>
  );
}
