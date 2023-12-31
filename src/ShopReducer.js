import React from 'react'
export const initailState = JSON.parse(localStorage.getItem('cart_items')) ||  {
    products: [],
    total: 0,
}
// Reducer is just like method that do specific things
const shopReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        //Add Cart To products method
        case 'ADD_PRODUCT_TO_CART':{
            return{
                ...state,
                products: payload.products
            }
        }

        //update quantity
        case 'UPDATE_PRODUCT_QUANTITY':{
            return{
                ...state,
                products: payload.products
            }
        }

        //remove product from cart
        case 'REMEOVE_PRODUCT_FROM_CART':{
            return{
                ...state,
                products: payload.products
            }
        }

        //Calculate total product quantities
        case 'CALCULATE_TOTAL_PRODUCTS': {
            return{
                ...state,
                total: payload.total
            }
        }

        //Clear All Product Cart
        case 'CLEAR_PRODUCT_CARTS': {
            return {
                products: [],
                total: 0
            }
        }

        default:
            throw new Error("Invalid Reducer Action");
    }
  
}

export default shopReducer;