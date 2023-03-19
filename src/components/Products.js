import { useSelector } from "react-redux";
import Product from "./Product";
import ProductForm from "./Product-Form";

const Products = () => {
  const products = useSelector((state) => state.products);

  const renderProducts = () => {
    if (products.length < 1) {
      return <h1>No Products To Show</h1>;
    } else {
      return products.map((product) => (
        <Product key={product.id} product={product} />
      ));
    }
  };

  return (
    <main className="py-16">
      <div className="productWrapper">
        <div className="productContainer" id="lws-productContainer">
          {renderProducts()}
        </div>
        <ProductForm />
      </div>
    </main>
  );
};

export default Products;
