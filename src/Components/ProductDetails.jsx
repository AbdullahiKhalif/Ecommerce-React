import axios from "axios";
import React, {useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";
import useShop from "../ShopContext";

const ProductDetails = () => {
  const { addToCart} = useShop();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(data);
        setMainImage(data.thumbnail);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
    };
    getProductDetail();
  }, [id]);

  if (loading) return <ProductDetailsSkeleton />;
  return (
    product && (
      <div className="p-4 md:p-8">
        <button
          onClick={() => navigate(-1)}
          className="bg-pink-600 px-4 py-2  text-white rounded-lg shadow hover:bg-pink-800 transition-colors duration-200"
        >
          ← Go Back
        </button>

        <h1 className="text-3xl mb-4 font-bold mt-3">{product.title}</h1>

        <div className="md:flex">
          <div className="md:w-1/2 pr-4 mb-6 md:mb-0">
            <img
              className="w-full h-96 object-cover rounded-lg shadow-md"
              src={mainImage}
              alt={product.title}
            />
            {/* image galary*/}
            <div className="flex mt-4 space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <img
                  className="w-24 h-24 object-cover rounded-md shadow cursor-pointer"
                  onClick={() => setMainImage(image)}
                  key={index}
                  src={image}
                  alt={product.title}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="md:w-1/2 pl-4">
            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="flex justify-between items-center mb-4">
              <span className="text-pink-600 font-bold text-2xl">
                ${product.price}
              </span>

              <span className="text-gray-600 font-light">
                {product.stock > 0
                  ? `${product.stock} In Stock`
                  : "Out of Stock"}
              </span>
            </div>

            <div>
              <span className="text-yellow-500 mb-4">
                {"★".repeat(Math.round(product.rating))}
              </span>
              <span className="text-gray-300">
                {"★".repeat(Math.round(5 - product.rating))}
              </span>
            </div>

            <div className="mt-4">
              <button className="bg-pink-600 px-4 py-2 text-white rounded-md shadow hover:bg-pink-800 transition-colors duration-200"
              onClick={() => addToCart(product)}>
                {" "}
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
