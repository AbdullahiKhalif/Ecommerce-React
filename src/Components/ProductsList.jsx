import React, { useEffect, useState } from "react";
import productsData from "../assets/productsData.json";
import ProductItems from "./ProductItem.jsx";
import axios from "axios";

import ProductLoadingSkeleton from "./ProductLoadingSkeleton";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );
        //console.log(data.products);
        setProducts(data.products);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    fetchProductsData();
  }, []);
  if (loading) return <ProductLoadingSkeleton />;
  return (
    <div className="grid grid-cols-1 m-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.length > 0 &&
        products.map((product) => (
          <ProductItems key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
