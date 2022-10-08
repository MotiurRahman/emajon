import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handelRemoveItem }) => {
  //console.log(product);
  const { id, name, price, quantity, img, shipping } = product;

  return (
    <div className="review-item">
      <div>
        <img width="80px" height="80px" src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p>{name}</p>
          <p>Price:{price}</p>
          <p>Shipping Charge:{shipping}</p>
          <small>Quantity:{quantity}</small>
        </div>
        <div className="delete-container">
          <button onClick={() => handelRemoveItem(id)} className="btn-delete">
            <FontAwesomeIcon
              className="deleteicon"
              icon={faTrash}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
