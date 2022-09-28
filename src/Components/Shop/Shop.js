import React, { useEffect, useState } from "react";
import Product from "../Porduct/Product";
import "./Shop.css";

const Shop = () => {
  const [product, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handelAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shopContainer">
      <div className="products-container">
        {product.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelAddToCart={handelAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h1>Order Sumary</h1>
        <p>Selected Item: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
