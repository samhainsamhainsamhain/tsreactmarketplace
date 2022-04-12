import React, { useState } from "react";

import { Product } from "../../shopinterface/productTypes";
import Card from "../UI/Card";

import classes from "./Product.module.css";

interface ProductProps extends Product {}

export default function ProductItem(props: ProductProps) {
  const [productQuantity, setProductQuantity] = useState(0);

  function addToCart() {
    setProductQuantity(productQuantity + 1);
  }

  function removeFromCart() {
    setProductQuantity(productQuantity - 1);
  }

  return (
    <Card>
      <div className={classes.product}>
        <img
          className={classes.image}
          src={props.image}
          alt="image of product"
        />
        <div className={classes.productInfo}>
          <span className={classes.title}>{props.title}</span>
          <span className={classes.price}>{props.price}</span>
        </div>
        <p className={classes.description}>{props.description}</p>
        <div className={classes.control}>
          <button onClick={removeFromCart}>-</button>
          <span>{productQuantity}</span>
          <button onClick={addToCart}>+</button>
        </div>
      </div>
    </Card>
  );
}
