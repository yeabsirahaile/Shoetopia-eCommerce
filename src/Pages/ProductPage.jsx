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
      title: "Nike Sports",
      price: 29.99,
    },
    {
      id: 2,
      image: "2.jpg",
      title: "Product 1",
      price: 29.99,
    },
    {
      id: 3,
      image: "3.jpg",
      title: "Product 1",
      price: 29.99,
    },
    {
      id: 4,
      image: "4.jpg",
      title: "Product 1",
      price: 29.99,
    },
    {
      id: 5,
      image: "5.jpg",
      title: "Product 1",
      price: 29.99,
    },
    {
      id: 6,
      image: "6.jpg",
      title: "Product 1",
      price: 29.99,
    },
    {
      id: 7,
      image: "7.jpg",
      title: "Product 1",
      price: 29.99,
    },
    {
      id: 8,
      image: "8.jpg",
      title: "Product 1",
      price: 29.99,
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
        <DrawerTrigger>Filter</DrawerTrigger>
        <DrawerContent>
          <div className="bg-slate-100">
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-900 bg-opacity-50">
          <div className="rounded-lg bg-white p-8">
            <h2 className="mb-4 text-2xl font-bold">Product Details</h2>
            <div className=" w-[60vh]">
              {" "}
              <img
                className="max-h-[400px] w-full overflow-hidden rounded-lg object-cover object-center"
                src={`/src/assets/images/${selectedProduct.image}`}
                alt={selectedProduct.title}
              />
            </div>

            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.price} ETB</p>
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
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
    <div className="m-4 overflow-hidden rounded-[0.6rem] bg-white shadow-sm drop-shadow-xl">
      <img
        src={`/src/assets/images/${image}`}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-700">{price} ETB</p>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => openModal(product)}
        >
          Details
        </button>
      </div>
    </div>
  );
}
