import { useCart } from "@/Context/CartContext";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, setIsCartOpen, isCartOpen } = useCart();
  console.log(isCartOpen);

  const handleClose = () => {
    setIsCartOpen(false); // Close the cart
  };

  const totalSumPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <div className="absolute -right-10 top-0 z-20 w-[22vw] rounded-lg bg-white p-4 shadow-md">
        <div className="flex justify-between">
          <h2 className="mb-2 text-xl font-bold">Cart</h2>
          <button
            className=" flex h-7 items-center justify-center rounded-md bg-gray-100 p-1 text-red-400 hover:bg-gray-200"
            onClick={handleClose}
          >
            Close Cart
          </button>
        </div>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between py-1"
                >
                  <img
                    className="  w-11"
                    src={`/assets/Images/${item.image}`}
                    alt="noimg"
                  />
                  <span>{item.title}</span>
                  <span>{item.price} ETB</span>
                  <button onClick={() => removeFromCart(item.id)}>
                    &times;
                  </button>
                </li>
              ))}
            </ul>
            <p className="py-2 font-bold text-red-500">
              Total: {totalSumPrice} ETB
            </p>
            <div className="flex justify-between">
              <NavLink
                to={"/checkout"}
                className=" flex h-8 items-center justify-center rounded-md bg-green-300 p-1 hover:bg-green-400"
                onClick={handleClose}
              >
                Proceed to checkout
              </NavLink>
              <button
                className=" flex h-8 items-center justify-center rounded-md bg-red-300 p-1  hover:bg-red-400"
                onClick={handleClose}
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
      {isCartOpen && (
        <div className=" fixed left-0 top-0 z-10 h-full w-full bg-green-900/50 backdrop-blur-sm"></div>
      )}
    </>
  );
}
