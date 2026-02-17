import axios from "axios";
import "./HomePage.css";
import { Header } from "../../components/Header.jsx";
import { useEffect, useState } from "react";
import { ProductsGrid } from "./ProductsGrid";
import { useSearchParams } from "react-router";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  window.axios = axios; // in console type axios.post('/api/reset') to reset the backend data

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    // get data from backend

    /*
    // using Promise

    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    }); */

    //using aync/await
    const getHomeData = async () => {
      console.log(search);
      const url = search ? `/api/products?search=${search}` : "/api/products";
      // get data from backend
      const response = await axios.get(url);
      setProducts(response.data);
    };

    getHomeData();
  }, [search]);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/images/home-favicon.png" />
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
