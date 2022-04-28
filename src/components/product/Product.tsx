import React, { useState } from "react";

import { Product } from "../../shopinterface/productTypes";
import DetailedProduct from "../detailedProduct/DetailedProduct";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal/Modal";
import { useModal } from "../UI/Modal/useModal";

import classes from "./Product.module.css";

interface ProductProps extends Product {}

export default function ProductItem(props: ProductProps) {
  const [productQuantity, setProductQuantity] = useState(0);
  const { isShown, toggle } = useModal();

  function addToCart() {
    setProductQuantity(productQuantity + 1);
  }

  function removeFromCart() {
    setProductQuantity(productQuantity - 1);
  }

  const detailedProduct = (
    <DetailedProduct
      id={props.id}
      title={props.title}
      price={props.price}
      description={props.description}
      image={props.image}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      productQuantity={productQuantity}
    />
  );

  return (
    <Card>
      <div className={classes.product}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src={props.image}
            alt={props.title}
          />
        </div>
        <div className={classes.productInfo}>
          <span className={classes.title}>{props.title}</span>
          <span className={classes.price}>${props.price}</span>
        </div>
        {/* <p className={classes.description}>{props.description}</p> */}
        <button className={classes.showMore} onClick={toggle}>Show More</button>
        <div className={classes.control}>
          <button onClick={removeFromCart}>-</button>
          <span>{productQuantity}</span>
          <button onClick={addToCart}>+</button>
        </div>
      </div>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={detailedProduct}
        headerText={props.title}
      />
    </Card>
  );
}
