import { useCart } from "@/Context/CartContext";

export default function CheckOut() {
  const { cart, removeFromCart, setIsCartOpen, isCartOpen } = useCart();

  return <>chekcout</>;
}
