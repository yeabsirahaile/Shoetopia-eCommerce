import { useCart } from "@/Context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="absolute right-0 top-0 rounded-lg bg-white p-4 shadow-md">
      <h2 className="mb-2 text-xl font-bold">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex items-center justify-between">
              <span>{item.title}</span>
              <span>{item.price} ETB</span>
              <button onClick={() => removeFromCart(item.id)}>&times;</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
