import { useLoaderData } from "react-router";
const ProductDetails = () => {
  const id = useLoaderData();
  return <div>ProductDetails for product {id}</div>;
};

export default ProductDetails;
