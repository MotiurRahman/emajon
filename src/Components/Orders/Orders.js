import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
    console.log("clicked");
  };
  const handelRemoveItem = (id) => {
    const remaining = cart.filter((product) => product._id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  return (
    <div className="shop-container">
      <div className="products-contaier">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handelRemoveItem={handelRemoveItem}
          ></ReviewItem>
        ))}

        {cart.length == 0 && (
          <h1>
            No Item. Please shop now <Link to="/shop">Shop Now</Link>
          </h1>
        )}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}>
          <button>
            <Link to="/shipping"> Proceed Shipping</Link>
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
