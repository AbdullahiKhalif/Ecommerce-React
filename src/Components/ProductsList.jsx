import React, { useEffect, useState,useRef, useContext } from "react";
import productsData from "../assets/productsData.json";
import ProductItems from "./ProductItem.jsx";
import {AiOutlineSearch} from 'react-icons/ai'
import axios from "axios";

import ProductLoadingSkeleton from "./ProductLoadingSkeleton";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debocesSearchTerm, setDebosedSearchTerm] = useState("");
  const [originalSearchTerm, setOriginalSearchTerm] = useState("");
  const [originalAvailableProducts, setOriginalAvailableProducts] = useState(0);
  const [availableProducts, setAvailableProducts] = useState(0);

  const searchRef = useRef(null);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );
        //console.log(data.products);
        setProducts(data.products);
        setOriginalSearchTerm(data.products);
        setAvailableProducts(data.products.length);
        setOriginalAvailableProducts(data.products.length)
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    fetchProductsData();
  }, []);
 
  // create another useEffect to make searching
  useEffect(() =>{
    const timerId = setTimeout(() =>{
      setDebosedSearchTerm(searchTerm)
    },500);
    return ()=> clearTimeout(timerId);
  },[searchTerm])

  //use another useEffect that checks if you have a search term or not
  useEffect(() =>{
    if(debocesSearchTerm){
      const fetchSearchProductData = async() =>{
        try{
          setLoading(true);
          const {data} = await axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`);
          setProducts(data.products);
          setAvailableProducts(data.products.length);
          setLoading(false);
        }catch(e){
          setLoading(false);
          console.log(e)
        }
      }
      fetchSearchProductData();
    }else{
      setProducts(originalSearchTerm);
      setAvailableProducts(originalAvailableProducts)
    }
  },[debocesSearchTerm])

  //use useRef Hoos to focus the search input field
  useEffect(() =>{
    if(searchRef.current){
      searchRef.current.focus();
    }
  },[products])
  if (loading) return <ProductLoadingSkeleton />;
  return (
    <>
    <div className="relative m-2">
      <input type="text" placeholder="Search Product" className="w-full p-2 pl-10 border rounded shadow focus:outline-none border-pink-400" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} ref={searchRef} />

      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <AiOutlineSearch className="w-6 h-6 text-pink-600"/>
      </span>
    </div>

    <div className="flex flex-col m-4">
      <h2 className="text-lg font-bold text-gray-600">
        Khalifa Shipment
      </h2>
      <p className="">({availableProducts ? `${availableProducts} products available. ` : "Not Available."})</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 mt-3 lg:grid-cols-3 gap-4 m-2">
      {products.length > 0 &&
        products.map((product) => (
          <ProductItems key={product.id} product={product} />
        ))}
    </div>
    </>
  );
};

export default ProductList;
