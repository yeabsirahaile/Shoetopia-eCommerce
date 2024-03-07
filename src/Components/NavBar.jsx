import { useCart } from "@/Context/CartContext";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";

export default function NavBar() {
  const { setIsCartOpen, isCartOpen, cart } = useCart();

  // Calculate the cart length
  const cartLength = cart ? cart.length : 0;
  console.log(cart);
  return (
    <div className="flex justify-between bg-[#A0FFA0] px-7 py-5">
      <div>
        <img width={"150rem"} src="./ShoetopiaLogo.png" alt="" />
      </div>
      <div className="relative -left-16">
        <div className="flex justify-around gap-8 pt-[0.8rem] text-start text-lg">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink onClick={() => setIsCartOpen((value) => !value)}>
            <div>
              {cartLength ? (
                <span className="relative -right-12 -top-2 inline-flex items-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
                  {cartLength}
                </span>
              ) : null}
              Cart
            </div>
          </NavLink>
        </div>
        <div className="relative">{isCartOpen ? <Cart /> : null}</div>
      </div>
    </div>
  );
}
