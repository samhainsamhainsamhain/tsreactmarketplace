import { useEffect, useState } from "react";

import Header from "./components/header/Header";
import ProductsList from "./components/products/Products";
import { Products } from "./shopinterface/productTypes";
import DUMMY_DATA from "./dummyProducts.json";

import "./App.css";
import { CartProvider } from "./store/СartProvider";

function App() {
  const [products, setProducts] = useState<Products>([]);
  useEffect(() => {
    setProducts(DUMMY_DATA);
  }, []);

  return (
    <CartProvider>
      <div className="App">
        <Header />
        <ProductsList products={products} />
      </div>
    </CartProvider>
  );
}

export default App;
