import React from "react";
import hero from "../../public/me.png";
import { useNavigate } from "react-router-dom";
import { BiCartAdd } from "react-icons/bi";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-4">About Khalifa Ecommerce</h1> */}
      <div className="flex justify-between items-center -mb-24">
        <div flex flex-col>
        <h2 className="text-pink-600 font-light">
            In this section, find the best 🔥.
          </h2>
          <h1 className="text-gray-900 font-bold text-5xl mt-2">
            Exclusive collection for everyone
          </h1>

          <button className="bg-pink-600 p-2 flex items-center text-white font-bold  w-36 rounded-lg mt-3 shodow hover:bg-pink-800 transition-colors duration-300" onClick={()=> navigate('/products')}>
          <BiCartAdd className="text-white text-3xl "/> Order Now
          </button>
        </div>

        <img
          src={hero}
          alt="Khalifa Ecommerce Logo"
          className="w-64 -mt-16 pb-1 h-auto"
        />
      </div>
    </div>
  );
};

export default Home;
