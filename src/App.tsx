import { useEffect, useState } from "react";

import Header from "./components/header/Header";
import ProductsList from "./components/products/Products"
import { Products } from "./shopinterface/productTypes";
import DUMMY_DATA from "./dummyProducts.json";

import "./App.css";

function App() {
  const [products, setProducts] = useState<Products>([]);
  useEffect(() => {
    setProducts(DUMMY_DATA);
  }, []);

  return (
    <div className="App">
      <Header cart={11} />
      <ProductsList products={products} />
    </div>
  );
}

export default App;
