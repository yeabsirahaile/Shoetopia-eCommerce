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

  return (
    <div className="  bg-[#A0FFA0]">
      <Drawer>
        <DrawerTrigger>Filter</DrawerTrigger>
        <DrawerContent>
          <div className="bg-slate-100 ">
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

      {/* <h1 className="py-8 text-center text-3xl font-bold">Products</h1> */}
      <div className="  grid grid-cols-1 gap-4 px-9 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ image, title, price }) {
  return (
    <div className="m-4 overflow-hidden rounded-[0.6rem] bg-white shadow-sm drop-shadow-xl">
      <img
        src={`./${image}`}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-700">{price} ETB</p>
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Details
        </button>
      </div>
    </div>
  );
}
