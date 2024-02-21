import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
