import { useState } from "react";
import "./Header.css";
import { NavLink, useNavigate, useSearchParams } from "react-router";

type HeaderProps = {
  cart: {
    productId: string,
    quantity: number,
    deliveryOptionId: string
  }[];
};

export function Header({ cart }: HeaderProps) {
  const [searchParams] = useSearchParams();
  const initalSearch = searchParams.get("search") || "";

  const navigate = useNavigate();
  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  const [search, setSearch] = useState(initalSearch);

  const updateSearchText = (event : React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const searchProducts = () => {
    navigate(`/?search=${search}`);
  };

  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src="images/logo-white.png" />
            <img className="mobile-logo" src="images/mobile-logo-white.png" />
          </NavLink>
        </div>

        <div className="middle-section">
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            value={search}
            onChange={updateSearchText}
          />

          <button className="search-button" onClick={searchProducts}>
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
