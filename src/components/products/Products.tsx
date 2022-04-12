import React, { useState, useEffect } from "react";
import { idText } from "typescript";

import DUMMY_DATA from "../../dummyProducts.json";
import { Products, Product } from "../../shopinterface/productTypes";
import ProductItem from "../product/Product";

import classes from './Products.module.css'

export default function ProductsList() {
  const [products, setProducts] = useState<Products>([]);
  useEffect(() => {
    setProducts(DUMMY_DATA);
  }, []);
  return (
    <div className={classes.productsList}>
      {products.map((item) => {
        return (
          <ProductItem
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        );
      })}
    </div>
  );
}
