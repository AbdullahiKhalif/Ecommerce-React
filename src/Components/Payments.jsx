import useShop from "../ShopContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Payments = () => {
  const notify = () => {
    // toast.success("Successfully Proceeded Cart!", {
    //   position: "top-center",
    //   progressClassName: "toast-progress",
    //   autoClose: 3000,
    //   progress: true,
    //   icon: <AiFillCheckCircle className="text-green-600" />, // Replace with your success icon
    // });
    alert("Successfully Proceeded Carts.✔");
    clearProductCarts();
  };

  const { total, clearProductCarts } = useShop();
  const handleProceed = () => {
    if (confirm("Are you sure to proceed?")) {
      notify();
    }
  };
  return (
    <div className="lg:1/3">
      <div className="border p-4 rounded-lg mb-4">
        <h2 className="text-2xl font-semibold mb-4">Choose Payment Method</h2>
        <div className="space-y-2">
          <label htmlFor="#name1" className="flex items-center space-x-2 ">
            <input
              name="payment"
              type="radio"
              className="text-pink-600"
              id="#name1"
            />
            <span>Card Payment</span>
          </label>
          <label htmlFor="#name2" className="flex items-center space-x-2 ">
            <input
              name="payment"
              type="radio"
              className="text-pink-600"
              id="#name2"
            />
            <span>Cash On Delivery</span>
          </label>
        </div>

        <div className="mt-6 border-t pt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 text-gl font-semibold">
              Subtotal
            </span>
            <span className="font-semibold text-lg text-gray-600 ">
              ${total}
            </span>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span className="text-pink-600 text-2xl font-semibold">Total</span>
            <span className="font-semibold text-2xl text-pink-600 ">
              ${total}
            </span>
          </div>

          <div className="block">
            <button
              className="bg-pink-600 px-4 py-2 rounded-lg text-white w-full hover:bg-pink-700 transition-colors duration-200 ease-in-out"
              onClick={handleProceed}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
