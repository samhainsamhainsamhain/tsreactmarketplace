import React, { useState, createContext, useEffect } from "react";

import { Product } from "../shopinterface/productTypes";

interface ICartContext {
  cartItems: CartItemType[];
  cartItemsQuantity: number;
  cartTotalPrice: number;
  getTotalItems: () => void;
  addToCartHandler: (item: CartItemType) => void;
  removeFromCartHandler: (id: number) => void;
}

interface CartItemType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  amount: number;
}

const defaultCart: CartItemType[] = [];
const cartItemsQuantity: number = 0;
const cartTotalPrice: number = 0;

export const CartContext = createContext<ICartContext>({
  cartItems: defaultCart,
  cartItemsQuantity: cartItemsQuantity,
  cartTotalPrice: cartTotalPrice,
  getTotalItems: () => {},
  addToCartHandler: () => {},
  removeFromCartHandler: () => {},
});

type cartProviderProps = {
  children: React.ReactNode;
};

export function CartProvider({ children }: cartProviderProps): JSX.Element {
  const [cartItems, setCartItems] = useState<CartItemType[]>(defaultCart);
  const [cartItemsQuantity, setCartItemsQuantity] = useState<number>(0);
  const [cartTotalPrice, setCartTotalPrice] = useState<number>(0);

  useEffect(() => {
    setCartTotalPrice(() => {
      return cartItems.reduce(
        (accumulator: number, item) => accumulator + item.price * item.amount,
        0
      );
    });
  }, [cartItemsQuantity]);

  function getTotalItems() {
    return cartItems.reduce(
      (accumulator: number, item) => accumulator + item.amount,
      0
    );
  }

  function addToCartHandler(item: Product) {
    setCartItemsQuantity(cartItemsQuantity + 1);
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === item.id) {
        return (cartItems[i].amount += 1);
      }
    }
    setCartItems((prevState) => [...prevState, { ...item, amount: 1 }]);
  }

  function removeFromCartHandler(id: number) {
    setCartItemsQuantity(cartItemsQuantity - 1);
    let updatedItems = cartItems;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === id && cartItems[i].amount > 1) {
        updatedItems[i].amount = updatedItems[i].amount - 1;
        // setCartTotalPrice(cartTotalPrice + item.price)
        setCartItems(updatedItems);
      } else if (cartItems[i].id === id && cartItems[i].amount === 1) {
        setCartItems(
          updatedItems.filter((item) => {
            return item.id !== id;
          })
        );
      }
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemsQuantity,
        cartTotalPrice,
        getTotalItems,
        addToCartHandler,
        removeFromCartHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
