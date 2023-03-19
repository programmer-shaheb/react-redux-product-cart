import { ADD_CART, DELETE_CART, REMOVE_CART } from "./actionTypes";

const initialCartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_CART:
      const { id, price, cartQuantity, quantity } = action.payload;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - cartQuantity,
          cartQuantity: existingCartItem.cartQuantity + cartQuantity,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = [
          ...state.items,
          {
            ...action.payload,
            quantity: quantity - cartQuantity,
          },
        ];
      }

      const updatedTotalAmount = state.totalAmount + price * cartQuantity;
      const updatedTotalQuantity = updatedItems.reduce(
        (acc, item) => acc + item.cartQuantity,
        0
      );

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalQuantity: updatedTotalQuantity,
      };

    case REMOVE_CART:
      const existingCartItemIndex2 = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem2 = state.items[existingCartItemIndex2];

      let updatedItems2;
      if (existingCartItem2) {
        const updatedItem2 = {
          ...existingCartItem2,
          quantity: existingCartItem2.quantity + 1,
          cartQuantity: existingCartItem2.cartQuantity - 1,
        };
        updatedItems2 = [...state.items];
        updatedItems2[existingCartItemIndex2] = updatedItem2;
      } else {
        updatedItems2 = [...state.items];
      }

      const updatedTotalAmount2 = updatedItems2.reduce(
        (acc, item) => acc + item.price * item.cartQuantity,
        0
      );

      const updatedTotalQuantity2 = updatedItems2.reduce(
        (acc, item) => item.cartQuantity + acc,
        0
      );

      return {
        items: updatedItems2,
        totalAmount: updatedTotalAmount2,
        totalQuantity: updatedTotalQuantity2,
      };

    case DELETE_CART:
      const updatedCartItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      const updatedTotalAmount3 = updatedCartItems.reduce(
        (acc, item) => acc + item.price * item.cartQuantity,
        0
      );
      const updatedTotalQuantity3 = updatedCartItems.reduce(
        (acc, item) => item.cartQuantity + acc,
        0
      );
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: updatedTotalAmount3,
        totalQuantity: updatedTotalQuantity3,
      };

    default:
      return state;
  }
};

export default cartReducer;
