import { ADD_CART, DELETE_CART, REMOVE_CART } from "./actionTypes";

export const addToCart = (item) => {
  return {
    type: ADD_CART,
    payload: item,
  };
};

export const removeFromCart = (item) => {
  return {
    type: REMOVE_CART,
    payload: item,
  };
};

export const deleteCartItem = (item) => {
  return {
    type: DELETE_CART,
    payload: item,
  };
};
