import useShop from "../ShopContext";
import Payments from "./Payments";
import { GoTrash } from "react-icons/go";

const CartItems = () => {
  const {products,updateProductQuantity, removeFromCart} = useShop();

  
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
                      onChange={(event) => updateProductQuantity(product,event.target.value)}
                      defaultValue={product.quantity}
                      min={1}
                    />
                  </div>
                </div>
                <button className="bg-pink-500 p-1 rounded hover:bg-pink-600 transition-colors duration-300 " onClick={() =>removeFromCart(product)}>
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
        }
export default CartItems;
