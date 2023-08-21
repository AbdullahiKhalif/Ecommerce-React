import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-2.png";
import useShop, { ShopContext } from "../ShopContext";

const Header = () => {
  const {products} = useShop()
  return (
    <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-60 backdrop-blur-md shadow-md z-10 ">
      <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
        <Link to="/">
          {/* KHALIFA */}
          <img src={Logo} alt="Logo"  className="w-28"/>
        </Link>
        <ul className="hidden lg:flex space-x-8 text-xl text-gray-700">
          <Link to="/" className="hover:text-pink-700">
            Home
          </Link>
          <Link to="/products" className="hover:text-pink-700">
            Products
          </Link>
          <Link to="/about" className="hover:text-pink-700">
            About
          </Link>

          <Link to="/contact" className="hover:text-pink-700">
            Contact
          </Link>
          <div className="relative">
            <Link to="/cart" className="hover:text-pink-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="absolute -top-1 -right-1 flex justify-center items-center bg-pink-700 rounded-full text-white text-xs w-5 h-5">
                {products.length}
              </span>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
