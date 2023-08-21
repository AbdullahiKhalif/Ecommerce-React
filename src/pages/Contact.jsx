import React from "react";
import contact from "../../public/contact.png";
const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 -mb-16 overflow-x-hidden">
      <h1 className="text-3xl font-bold mb-4 text-pink-600">Contact Us</h1>
      <div className="flex justify-between">
        <div className="flex ">
          <form className="w-96">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex items-center justify-end">
              <button
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        <div>
          <img src={contact} alt="Contact" className="w-72 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
