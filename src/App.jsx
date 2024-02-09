import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
