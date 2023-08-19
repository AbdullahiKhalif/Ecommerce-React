import React from "react";
import Payments from "./Payments";
import { GoTrash } from "react-icons/go";

const CartItems = () => {
  const products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-6">
      <div className="flex-1">
        <h2 className="text-2xl font-semibold">
          {products.length > 0
            ? "Your Cart Items"
            : "Your Cart is empty right now please go head and add some items"}
        </h2>
        {products.map((product) => (
          <div key={product.id} className="flex items-start mb-4 space-x-4">
            <img
              className="w-24 h-24 object-cover rounded-md shadow"
              src={product.thumbnail}
              alt={product.title}
            />

            {/* Product Info */}

            <div className="flex flex-col justify-between flex-1">
              <h2 className="font-bold text-lg">{product.title}</h2>

              <div className="text-gray-600 text-sm">{product.description}</div>

              <div className="flex justify-between items-center mb-6">
                {/* Quanity and product */}
                <div className="flex justify-between items-center  space-x-3 mt-2">
                  <span className="text-pink-600 font-semibold">
                    ${product.price.toFixed()}
                  </span>

                  <div className="flex  items-center space-x-2">
                    <label className="text-gray-900 font-semibold">
                      Quantity:
                    </label>
                    <input
                      type="number"
                      className="w-16 border border-gray-300 rounded-md  p-2 outline-none focus:border-gray-400"
                    />
                  </div>
                </div>
                <button className="bg-pink-500 p-1 rounded hover:bg-pink-600 transition-colors duration-300 ">
                  <GoTrash className= "text-white font-semibold" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Payments />
    </div>
  );
};

export default CartItems;
