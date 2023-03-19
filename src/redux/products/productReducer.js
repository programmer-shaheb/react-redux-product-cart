import {
  ADDED,
  DECREASE_QUANTITY,
  DEFAULT_QUANTITY,
  INCREASE_QUANTITY,
} from "./actionTypes";

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [...state, action.payload];

    case DECREASE_QUANTITY:
    case INCREASE_QUANTITY:
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) return state;

      const currentItem = state[itemIndex];
      const updatedQuantity =
        currentItem.quantity + (action.type === INCREASE_QUANTITY ? 1 : -1);
      if (updatedQuantity < 0) return state;

      const updatedItem = { ...currentItem, quantity: updatedQuantity };
      const updatedItems = [...state];
      updatedItems[itemIndex] = updatedItem;

      return updatedItems;

    case DEFAULT_QUANTITY:
      const defaultItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (defaultItemIndex < 0) return state;

      const defaultCurrentItem = state[defaultItemIndex];

      const newQuantity =
        defaultCurrentItem.quantity + action.payload.cartQuantity;

      if (newQuantity < 0) return state;

      const defaultUpdatedItem = {
        ...defaultCurrentItem,
        quantity: newQuantity,
      };
      const defaultUpdatedItems = [...state];
      defaultUpdatedItems[defaultItemIndex] = defaultUpdatedItem;

      return defaultUpdatedItems;

    default:
      return state;
  }
};

export default productReducer;
