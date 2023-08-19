import React, { createContext, useReducer } from "react";
import shopReducer, { initailState } from "./ShopReducer";

const ShopContext = createContext();

export const shopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initailState);

  // prepare the methods
  // calculate the total
  const calculateTotalPrice = (products) => {
    let total = 0;

    products.forEach((product) => {
      total += product.price;
    });

    dispatch({
      type: "CALCULATE_TOTAL_PRODUCTS",
      payload: { total },
    });
  };

  // add product to cart
  const addToCart = (product) => {
    const productIndex = state.products.findIndex((p) => p.id === product.id);
    let updatedProduct = [...state.products];

    if (productIndex !== -1) {
      //update product quantity
      updatedProduct[productIndex] = {
        ...updatedProduct[productIndex],
        quantity: updatedProduct[productIndex].quantity + 1,
      };
    } else {
      // add new product
      updatedProduct = [
        ...updatedProduct,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    //TODO: calculate the total price
    calculateTotalPrice(updatedProduct);
    dispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: {
        products: updatedProduct,
      },
    });
  };

  const updateProductQuantity = (product,newQuantity) => {
    const productIndex = state.products.findIndex((prop) => prop.id !== product.id);
    let updatedProduct = [...state.products];
    
    if(newQuantity <= 0){
      updatedProduct = state.products.filter((prop) => prop.id !== product.id);
    }else{
      updatedProduct[productIndex] = [
        ...updatedProduct[productIndex],{
          quantity: newQuantity
        }

      ]
    };
    calculateTotalPrice(updatedProduct);
    dispatch({
      type: "UPDATE_PRODUCT_QUANTIITY",
      payload: {
        productts: updatedProduct()
      }
    })
  };

  // remove product from cart methods
  const removeFromCart = (product) => {
    const updatedProduct = state.products.flitter(pro => prod.id !== product.id);
    calculateTotalPrice(updatedProduct);
    dispatch({
      type: "REMEOVE_PRODUCT_FROM_CART",
      payload: {
        products: updatedProduct,
      }
    });
  };

  // remove All Products from Cart
  const clearProductCarts = () => {
    dispatch({
      type: "CLEAR_PRODUCT_CARTS",
      payload: {}
    })
  };

  // create a new value variable that holds all functions that are defined
  const value = {
    products: state.product,
    total: state.total,
    addToCart,
    updateProductQuantity,
    removeFromCart,
    clearProductCarts,
  }

  // don't miss return your context 
  return(
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>

    // After that go to your main file and wrap this shopContext into your project
  )
};

