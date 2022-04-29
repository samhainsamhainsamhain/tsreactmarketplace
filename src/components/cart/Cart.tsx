import { useContext } from "react";

import { CartContext } from "../../store/СartProvider";

import classes from "./Cart.module.css";

export default function Cart() {
  const cartCtx = useContext(CartContext);

  return (
    <div>
      <ul className={classes.cartList}>
        {cartCtx.cartItems.map((item) => {
          console.log("item added");
          return (
            <li className={classes.cartItem}>
              <div className={classes.itemImageContainer}>
                <img
                  className={classes.itemImage}
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <h4 className={classes.itemTittle}>{item.title}</h4>
              <div className={classes.itemAmount}>
                <span className={classes.itemPrice}>
                  ${(item.price * item.amount).toFixed(2)}
                </span>
                <div className={classes.control}>
                  <button
                    onClick={() => cartCtx.removeFromCartHandler(item.id)}
                  >
                    -
                  </button>
                  <span>{item.amount}</span>
                  <button
                    onClick={() => {
                      cartCtx.addToCartHandler(item);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={classes.cartTotal}>
        <h3>Total Price:</h3>
        <span>${cartCtx.cartTotalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}
