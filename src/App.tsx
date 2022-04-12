import Header from "./components/header/Header";
import Products from "./components/products/Products"

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

  return (
    <div className="App">
      <Header cart={11} />
      <Products />
    </div>
  );
}

export default App;
