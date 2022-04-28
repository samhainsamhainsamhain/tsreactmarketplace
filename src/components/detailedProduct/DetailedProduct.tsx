import React from "react";
import { Product } from "../../shopinterface/productTypes";

import classes from "./DetailedProduct.module.css";

interface DetailedProductProps extends Product {
  addToCart: () => void;
  removeFromCart: () => void;
  productQuantity: number;
}

export default function DetailedProduct(props: DetailedProductProps) {
  return (
    <div className={classes.detailedProduct}>
      <div className={classes.detailedLeft}>
        <div className={classes.detailedPhotoWrapper}>
          <img
            className={classes.detailedPhoto}
            src={props.image}
            alt={props.title}
          />
        </div>
        <span className={classes.detailedPrice}>${props.price}</span>
      </div>
      <div className={classes.detailedRight}>
        <p>{props.description}</p>
        <div className={classes.control}>
          <button onClick={props.removeFromCart}>-</button>
          <span>{props.productQuantity}</span>
          <button onClick={props.addToCart}>+</button>
        </div>
      </div>
    </div>
  );
}
