import { useSelector } from "react-redux";
import BillForm from "./Bill-Form";
import CartItem from "./Cart-Item";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const renderCartItems = () => {
    if (cart.items.length < 1) {
      return <h1>Cart Empty</h1>;
    } else {
      return cart.items?.map((item) => <CartItem key={item.id} item={item} />);
    }
  };

  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">{renderCartItems()}</div>
          <BillForm />
        </div>
      </div>
    </main>
  );
};

export default Cart;
