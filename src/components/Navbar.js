import { useSelector } from "react-redux";
import logo from "../images/logo.png";

const Navbar = ({ showCartHandler }) => {
  const { cart } = useSelector((state) => state);

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="#">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <a
            href="#"
            onClick={() => showCartHandler((prev) => false)}
            className="navHome"
            id="lws-home"
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => showCartHandler((prev) => true)}
            className="navCart"
            id="lws-cart"
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{cart.totalQuantity}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
