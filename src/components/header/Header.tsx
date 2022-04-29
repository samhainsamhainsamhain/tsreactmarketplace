import { useContext } from "react";

import Cart from "../cart/Cart";
import { CartContext } from "../../store/СartProvider";
import Modal from "../UI/Modal/Modal";
import { useModal } from "../UI/Modal/useModal";

import classes from "./Header.module.css";
import shopIcon from "../../assets/shop-icon.png";
import cartIcon from "../../assets/cart-icon.svg";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const { isShown, toggle } = useModal();

  const content = <Cart />;

  return (
    <header className={classes.header}>
      <img src={shopIcon} alt="shop icon" />
      <h1>TypeScript React Shop</h1>
      <div className={classes.cart} onClick={toggle}>
        <img src={cartIcon} alt="cart icon" />
        <span className={classes.badge}>{cartCtx.cartItemsQuantity}</span>
      </div>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        headerText={"Cart"}
      />
    </header>
  );
}
