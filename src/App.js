import React from "react";
import "./App.css";
import { AddToCart, RemoveFromCart ,EmptyCart } from "./redux/action";
import { useDispatch } from "react-redux";
import Navbar from "./component/Navbar/Navbar";

function App() {
  const dispatch = useDispatch();
  const Product = {
    name: "Phone",
    type: "vivo",
    country: "china",
  };
  return (
    <div className="App">
      <Navbar />
      <h1>Happy Learning</h1>
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
        <button onClick={() => dispatch(EmptyCart(Product))}>
          Empty cart
        </button>
      </div>
    </div>
  );
}

export default App;
