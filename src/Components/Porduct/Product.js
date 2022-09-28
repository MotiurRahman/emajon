import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const {
    name,
    category,
    seller,
    price,
    stock,
    ratings,
    img,
    quantity,
    shipping,
  } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h6 className="product-name">{name}</h6>
      <h6 className="product-price">Price:${price}</h6>
      <p>Manufacturer:{seller}</p>
      <p>Rating : {ratings} start</p>
      <button
        onClick={() => props.handelAddToCart(props.product)}
        className="addToCartBtn"
      >
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
