import { useLoaderData } from "react-router";
import { products } from "../services/products";
import { useContext } from "react";
import cartContext from "../context/CartContext";

const ProductDetails = () => {
  const id = useLoaderData();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useContext(cartContext);

  return (
    <div>
      {product ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <img src={product.image} alt={product.name} className="w-40 mb-4" />
          <p className="text-xl font-semibold text-blue-600 mb-2">
            ${product.price}
          </p>
          <p>{product.description}</p>
          <button
            type="button"
            onClick={() => addToCart(product.id)}
            className="mt-4 bg-amber-300 text-black px-4 py-2 rounded-md hover:bg-amber-400 transition-colors"
          >
            Add To Cart
          </button>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetails;
