import React from "react";

import Card from "../UI/Card";

import classes from "./Product.module.css";

export default function Product() {
  return (
    <Card>
      <div className={classes.container}>
        <img
          className={classes.image}
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="image of product"
        />
        <div className={classes.productInfo}>
          <span className={classes.title}>Product name</span>
          <span className={classes.price}>$13.99</span>
        </div>
        <p className={classes.description}>
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <div className={classes.control}>
          <button>-</button>
          <span>11</span>
          <button>+</button>
        </div>
      </div>
    </Card>
  );
}
