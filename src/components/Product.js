import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/actions";
import { decreaseQuantity } from "../redux/products/actions";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const { name, category, image, price, quantity } = product;

  const addCartHandler = (item) => {
    dispatch(addToCart({ ...item, cartQuantity: 1 }));
    dispatch(decreaseQuantity(product));
  };

  return (
    <>
      <div className="lws-productCard">
        <img className="lws-productImage" src={image} alt="product" />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">{name}</h4>
          <p className="lws-productCategory">{category}</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price">{price}</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity">{quantity}</span>
            </p>
          </div>
          <button
            disabled={quantity === 0}
            onClick={() => addCartHandler(product)}
            className="lws-btnAddToCart"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
