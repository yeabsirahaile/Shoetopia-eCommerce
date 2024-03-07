import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import NavBar from "./Components/NavBar";

import { CartProvider } from "./Context/CartContext";
import Cart from "./Components/Cart";
import CheckOut from "./Components/CheckOut";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
