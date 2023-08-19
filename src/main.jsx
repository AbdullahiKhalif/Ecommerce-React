import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About.jsx"
import Products from "./pages/Products.jsx";
import Producr from "./pages/Product.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";
const routerProvider = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/product-details/:id",
        element: <Producr/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },  
      {
        path: "/cart",
        element: <Cart/>
      },  
     
      {
        path: "*",
        element: <h1>404 Not Found</h1>
      }
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={routerProvider}/>
  </React.StrictMode>
);
