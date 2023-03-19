import { useDispatch } from "react-redux";
import {
  addToCart,
  deleteCartItem,
  removeFromCart,
} from "../redux/cart/actions";
import {
  decreaseQuantity,
  defaultQuantity,
  increaseQuantity,
} from "../redux/products/actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const { name, price, quantity, image, category, cartQuantity } = item;

  const addCartHandler = (item) => {
    dispatch(addToCart({ ...item, cartQuantity: 1 }));
    dispatch(decreaseQuantity(item));
  };

  const removeCartHandler = (item) => {
    dispatch(removeFromCart(item));
    dispatch(increaseQuantity(item));
  };

  const deleteCartHandler = (item) => {
    dispatch(deleteCartItem(item));
    dispatch(defaultQuantity(item));
  };

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        <img className="lws-cartImage" src={image} alt="product" />

        <div className="space-y-2">
          <h4 className="lws-cartName">{name}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        <div className="flex items-center space-x-4">
          <button
            disabled={quantity === 0}
            onClick={() => addCartHandler(item)}
            className="lws-incrementQuantity"
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{cartQuantity}</span>
          <button
            disabled={cartQuantity === 0}
            onClick={() => removeCartHandler(item)}
            className="lws-decrementQuantity"
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>

        <p className="text-lg font-bold">
          BDT{" "}
          <span className="lws-calculatedPrice">{price * cartQuantity}</span>
        </p>
      </div>

      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          onClick={() => deleteCartHandler(item)}
          className="lws-removeFromCart"
        >
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
