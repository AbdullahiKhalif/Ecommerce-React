export const initailState = {
    products: [],
    total: 0,
}

import React from 'react'

const ShopReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        //Add Cart To products method
        case 'ADD_CART_TO_PRODUCT':{
            return{
                ...state,
                priducts: payload.products
            }
        }

        //update quantity
        case 'UPDATE_QUANTITY_PRODUCT':{
            return{
                ...state,
                products: payload.products
            }
        }

        //delete product from cart
        case 'DELETE_PRODUCT_FROM_CART':{
            return{
                ...state,
                products: payload.products
            }
        }

        //Calculate total product quantities
        case 'CALCULATE_PRODUCT_TOTAL': {
            return{
                ...state,
                total: payload.total
            }
        }

        //Clear Product Cart
        case 'CLEAR_PRODUCT_CART': {
            return initailState
        }

        default:
            throw new Error("Invalid Reducer Action");
    }
  
}

export default ShopReducer