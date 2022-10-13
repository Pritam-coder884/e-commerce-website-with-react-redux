import React from "react";
import "./Home.scss";
import { AddToCart, RemoveFromCart, EmptyCart } from "../../redux/action";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const Product = {
    name: "Phone",
    type: "vivo",
    country: "china",
  };
  return (
    <div className="home">
      
      <div>
        <button onClick={() => dispatch(AddToCart(Product))}>
          Add to cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(RemoveFromCart(Product))}>
          Remove from cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(EmptyCart(Product))}>Empty cart</button>
      </div>
    </div>
  );
};

export default Home;
