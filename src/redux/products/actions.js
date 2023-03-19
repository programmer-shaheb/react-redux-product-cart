import {
  ADDED,
  DECREASE_QUANTITY,
  DEFAULT_QUANTITY,
  INCREASE_QUANTITY,
} from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADDED,
    payload: {
      ...product,
      price: parseInt(product.price),
      quantity: parseInt(product.quantity),
    },
  };
};

export const decreaseQuantity = (product) => {
  return {
    type: DECREASE_QUANTITY,
    payload: product,
  };
};

export const increaseQuantity = (product) => {
  return {
    type: INCREASE_QUANTITY,
    payload: product,
  };
};

export const defaultQuantity = (product) => {
  return {
    type: DEFAULT_QUANTITY,
    payload: product,
  };
};
