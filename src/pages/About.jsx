import React from "react";
import hero from "../../public/me.png";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
   
    <div className="max-w-4xl mx-auto px-4 -mt-12 -mb-12">
      <div className="lg:flex items-center">
        <img
          src={hero}
          alt="Ecommerce Image"
          className="w-64 h-auto rounded-lg "
        />
        <div className="flex flex-col px-8">
          <h1 className="text-4xl text-pink-600 font-bold mb-4">
            About Our Ecommerce Platform
          </h1>
          <p className="text-xl font-light text-gray-900">
            {" "}
            At our ecommerce platform, we strive to provide a seamless shopping
            experience for customers around the globe. With a wide range of
            high-quality products, competitive prices, and secure transactions,
            we aim to exceed your expectations. Our dedicated team works
            tirelessly to ensure your satisfaction and deliver your orders
            promptly.{" "}
            <span className="text-pink-600 font-semibold">
              Join us today
            </span>{" "}
            and discover the convenience and{" "}
            <span className="text-purple-600 font-semibold">
              joy of online shopping!
            </span>
          </p>

          <div className="flex justify-start space-x-4 items-center">
      
          <button 
          onClick={() => navigate('/contact')}
          className="bg-pink-600 p-2 py-3  space-x-2 flex items-center text-white font-bold  w-28 rounded-lg mt-3 shodow hover:bg-pink-800 transition-colors duration-300" >
           Contact Us
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
