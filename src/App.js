import { useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <Navbar showCartHandler={setShowCart} />
      {!showCart && <Products />}
      {showCart && <Cart />}
    </>
  );
}

export default App;
