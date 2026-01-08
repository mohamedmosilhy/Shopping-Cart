import { useLoaderData } from "react-router";
import { products } from "../services/products";
const ProductDetails = () => {
  const id = useLoaderData();
  const product = products.find((p) => p.id === id);
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
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetails;
