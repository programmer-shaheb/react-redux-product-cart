import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import { addProduct } from "../redux/products/actions";

const initialState = {
  id: "",
  name: "",
  category: "",
  image: "",
  price: "",
  quantity: "",
};

const ProductForm = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useReducer(
    (prevState, newState) => ({ ...prevState, ...newState }),
    initialState
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ id: uuidV4(), [name]: value });
  };

  const addProductHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    setProduct(initialState);
  };

  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          onSubmit={(e) => addProductHandler(e)}
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
        >
          <div className="space-y-2">
            <label for="name">Product Name</label>
            <input
              onChange={(e) => handleInputChange(e)}
              value={product.name}
              className="addProductInput"
              id="lws-inputName name"
              type="text"
              name="name"
              required
            />
          </div>

          <div className="space-y-2">
            <label for="category">Category</label>
            <input
              onChange={(e) => handleInputChange(e)}
              value={product.category}
              className="addProductInput"
              id="lws-inputCategory category"
              type="text"
              name="category"
              required
            />
          </div>

          <div className="space-y-2">
            <label for="image">Image Url</label>
            <input
              onChange={(e) => handleInputChange(e)}
              value={product.image}
              className="addProductInput"
              id="lws-inputImage image"
              type="text"
              name="image"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label for="price">Price</label>
              <input
                onChange={(e) => handleInputChange(e)}
                value={product.price}
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                name="price"
                required
              />
            </div>

            <div className="space-y-2">
              <label for="quantity">Quantity</label>
              <input
                onChange={(e) => handleInputChange(e)}
                value={product.quantity}
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                name="quantity"
                required
              />
            </div>
          </div>

          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
