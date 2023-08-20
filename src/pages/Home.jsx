import React from "react";
import hero from "../../public/hero.webp";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div class="relative flex flex-col -mt-2 m-2 w-full h-96 overflow-hidden">
      <div className="flex md:flex lg:flex justify-between aspect-w-4 aspect-h-3">
        <div className="flex flex-col mt-28 max-w-lg ">
          <h2 className="text-pink-600 font-light">
            In this section, find the best 🔥.
          </h2>
          <h1 className="text-gray-900 font-bold text-5xl mt-2">
            Exclusive collection for everyone
          </h1>

          <button className="bg-pink-600 px-4 py-2 text-white font-bold  w-32 rounded-lg mt-3 shodow hover:bg-pink-700 transition-colors duration-300" onClick={()=> navigate('/products')}>
            Order Now
          </button>
        </div>
        <img
          src="../../public/me.png"
          className="-mt-5 pb-10 object-cover h-1/3 cursor-pointer"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Home;
