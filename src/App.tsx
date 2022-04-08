import Header from "./components/header/Header";
import ProductItem from "./components/product/Product";

import "./App.css";

function App() {
  const dummyProduct = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  };

  const itemsInCart = 11;

  return (
    <div className="App">
      <Header itemsQuantity={itemsInCart} />
      <ProductItem
        id={dummyProduct.id}
        title={dummyProduct.title}
        price={dummyProduct.price}
        description={dummyProduct.description}
        image={dummyProduct.image}
      />
    </div>
  );
}

export default App;
