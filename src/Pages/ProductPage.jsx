import { Button } from "@/Components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/Components/ui/drawer";
import { useCart } from "@/Context/CartContext";
import { useState } from "react";

export default function ProductPage() {
  const products = [
    {
      id: 1,
      image: "1.jpg",
      title: "Nike Air Max 270",
      price: 6700,
      description:
        "The Nike Air Max 270 is inspired by two icons of big Air: the Air Max 180 and Air Max 93. It features Nike's biggest heel Air unit yet for a super-soft ride that feels as impossible as it looks.",
    },
    {
      id: 2,
      image: "2.jpg",
      title: "Nike Air Force 1",
      price: 7200,
      description:
        "The legend lives on in the Nike Air Force 1, which stays true to its roots with iconic AF1 style and Nike Air cushioning for all-day comfort and long-lasting wear.",
    },
    {
      id: 3,
      image: "3.jpg",
      title: "Nike Zoom Fly 3",
      price: 5900,
      description:
        "The Nike Zoom Fly 3 gives distance runners race-day comfort and durability. The propulsive power of a carbon fiber plate keeps you in the running mile after mile.",
    },
    {
      id: 4,
      image: "4.jpg",
      title: "Nike Air Zoom 37",
      price: 7800,
      description:
        "The Nike Air Zoom Pegasus 37 helps deliver the support you need in a fit that helps you feel fast. Zoom Air feels soft yet bouncy to give you the responsiveness you need for long miles.",
    },
    {
      id: 5,
      image: "5.jpg",
      title: "Nike React Infinity Run",
      price: 6100,
      description:
        "The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel.",
    },
    {
      id: 6,
      image: "6.jpg",
      title: "Nike Joyride Dual Run",
      price: 7300,
      description:
        "The Nike Joyride Dual Run blurs the line between stability and cushioning. Its plush cushioning provides a soft, comfortable ride while the upper wraps your foot in cozy support.",
    },
    {
      id: 7,
      image: "7.jpg",
      title: "Nike Air 3",
      price: 6900,
      description:
        "The Nike Air VaporMax Flyknit 3 brings bounce to your step with Max Air cushioning that stretches from heel to toe. Flyknit construction hugs your foot for a comfortable fit.",
    },
    {
      id: 8,
      image: "8.jpg",
      title: "Nike Revolution 5",
      price: 5600,
      description:
        "The Nike Revolution 5 cushions your stride with soft foam to keep you running in comfort. Lightweight knit material wraps your foot in breathable support, while a minimalist design fits in just about anywhere your day takes you.",
    },
    // ... more products
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const { cart, setCart, addToCart, removeFromCart } = useCart();

  return (
    <div className="bg-[#A0FFA0]">
      <Drawer>
        <DrawerTrigger className="px-7">Filter</DrawerTrigger>
        <DrawerContent>
          <div className="bg-slate-100">
            <DrawerHeader>
              <DrawerTitle>Filter</DrawerTitle>
              <DrawerDescription>Choose Category to filter</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-900 bg-opacity-50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="rounded-lg bg-[#c0ffc0] p-8">
            <h2 className="mb-4 text-2xl font-bold">Product Details</h2>
            <div className=" w-[60vh]">
              {" "}
              <img
                className="max-h-[320px] w-full overflow-hidden rounded-lg object-cover object-center"
                src={`/src/assets/images/${selectedProduct.image}`}
                alt={selectedProduct.title}
              />
            </div>
            <div className="flex justify-between">
              <h1 className=" pt-2 text-xl font-bold text-green-700">
                {selectedProduct.title}
              </h1>
              <p className=" py-2 text-lg font-bold text-red-500">
                {selectedProduct.price} ETB
              </p>
            </div>
            <p className=" w-96 py-2 text-justify font-light">
              {selectedProduct.description}{" "}
            </p>
            <button
              className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              onClick={() => addToCart(selectedProduct)}
            >
              Add to Cart
            </button>
            <Button onClick={closeModal}>Close</Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 px-9 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            openModal={openModal}
          />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product, openModal }) {
  const { image, title, price } = product;

  return (
    <div
      className="m-4 cursor-pointer overflow-hidden rounded-[0.6rem] bg-[#c0ffc0] shadow-sm drop-shadow-xl "
      onClick={() => openModal(product)}
    >
      <img
        src={`/src/assets/images/${image}`}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <div className="flex justify-between">
          <p className="mb-4 font-semibold text-gray-700">{price} ETB</p>
          <div className="flex gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-400 text-white">
              39
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-400 text-white">
              42
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-400 text-white">
              43
            </div>
          </div>
        </div>
        <button
          className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600"
          onClick={() => openModal(product)}
        >
          Details
        </button>
      </div>
    </div>
  );
}
