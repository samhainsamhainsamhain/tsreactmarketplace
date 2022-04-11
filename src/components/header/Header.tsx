import classes from "./Header.module.css";
import shopIcon from "../../assets/shop-icon.png";
import cartIcon from "../../assets/cart-icon.svg";

interface Header {
  cart: number;
}

export default function Header(props: Header) {
  return (
    <header className={classes.header}>
      <img src={shopIcon} alt="shop icon" />
      <h1>TypeScript React Shop</h1>
      <div className={classes.cart}>
        <img src={cartIcon} alt="cart icon" />
        <span className={classes.badge}>{props.cart}</span>
      </div>
    </header>
  );
}
