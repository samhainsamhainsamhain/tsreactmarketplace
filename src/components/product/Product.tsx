import { useContext, useState } from "react";

import { Product } from "../../shopinterface/productTypes";
import Card from "../UI/Card/Card";
import { CartContext } from "../../store/СartProvider";

import classes from "./Product.module.css";

interface ProductProps extends Product {
  amount: number
}

export default function ProductItem(props: ProductProps) {
  const [productQuantity, setProductQuantity] = useState(0);
  const cartCtx = useContext(CartContext)

  function addToCart() {
    setProductQuantity(productQuantity + 1)
    cartCtx.addToCartHandler(props)
  }

  function removeFromCart() {
    setProductQuantity(productQuantity - 1)
    cartCtx.removeFromCartHandler(props.id)
  }

  return (
    <Card>
      <div className={classes.product}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src={props.image}
            alt="image of product"
          />
        </div>
        <div className={classes.productInfo}>
          <span className={classes.title}>{props.title}</span>
          <span className={classes.price}>{props.price}</span>
        </div>
        <p className={classes.description}>{props.description}</p>
        <div className={classes.control}>
          <button onClick={removeFromCart} disabled={productQuantity < 1}>-</button>
          <span>{productQuantity}</span>
          <button onClick={addToCart}>+</button>
        </div>
      </div>
    </Card>
  );
}
