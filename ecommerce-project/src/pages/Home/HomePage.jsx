import axios from "axios";
import "./HomePage.css";
import { Header } from "../../components/Header.jsx";
import { useEffect, useState } from "react";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // get data from backend

    /*
    // using Promise

    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    }); */

    //using aync/await
    const getHomeData = async () => {
      // get data from backend
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };

    getHomeData();
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/images/home-favicon.png" />
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
