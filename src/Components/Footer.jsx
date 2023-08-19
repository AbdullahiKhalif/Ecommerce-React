import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="py-6 mt-16 border-t border-gray-200">
      <div className="max-w-4x mx-auto text-center">
        <p className="text-gray-600 font-light mb-2">
          Thank you for visting this website.
        </p>
        <p className="text-gray-800 text-lg font-semibold">
          Khalifa &copy; {currentYear}.
        </p>
      </div>
    </div>
  );
};

export default Footer;
