import { Products } from "../../shopinterface/productTypes";
import ProductItem from "../product/Product";

import classes from "./Products.module.css";

interface ProductsListProps {
  products: Products;
}

export default function ProductsList(props: ProductsListProps) {
  return (
    <div className={classes.productsList}>
      {props.products.map((item) => {
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
