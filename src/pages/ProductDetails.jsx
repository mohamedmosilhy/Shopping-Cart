import { useLoaderData } from "react-router";
import { Link } from "react-router";
import { products } from "../services/products";
import { useContext } from "react";
import cartContext from "../context/CartContext";

const ProductDetails = () => {
  const id = useLoaderData();
  const product = products.find((p) => p.id === id);
  const { addToCart, cartItems } = useContext(cartContext);

  if (!product) {
    return <p className="p-6 text-lg">Product not found.</p>;
  }

  const cartItem = cartItems.find((item) => item.id === product.id);
  const inCartAmount = cartItem ? cartItem.cartAmount : 0;
  const isOutOfStock = inCartAmount >= product.stockAmount;

  return (
    <section className="p-6 md:p-10 animate-rise">
      <div className="max-w-5xl mx-auto glass-panel border border-white/70 rounded-2xl shadow-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-xl overflow-hidden bg-slate-50/90 border border-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full min-h-80 object-cover"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-slate-500 mb-2">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold mb-3 text-slate-900">
            {product.name}
          </h1>
          <p className="text-2xl font-semibold text-orange-600 mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-slate-700 leading-relaxed mb-5">
            {product.description}
          </p>

          <div className="text-sm text-slate-600 mb-5 space-y-1">
            <p>In stock: {product.stockAmount}</p>
            <p>In your cart: {inCartAmount}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => addToCart(product.id)}
              disabled={isOutOfStock}
              className="bg-slate-900 text-amber-100 px-5 py-3 rounded-lg hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isOutOfStock ? "Out of Stock" : "Add To Cart"}
            </button>

            <Link
              to="/cart"
              className="px-5 py-3 rounded-lg border border-slate-300 text-slate-800 hover:bg-white/70 transition-colors"
            >
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
