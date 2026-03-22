import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <article
      className="group glass-panel border border-white/70 rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      onClick={() => {
        navigate(`/product/${product.id}`);
      }}
    >
      <div className="h-64 w-full overflow-hidden relative">
        <img
          src={product.image}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={product.name}
        />
        <span className="absolute top-3 left-3 text-xs font-semibold bg-white/85 text-slate-800 px-2.5 py-1 rounded-full border border-white">
          Stock {product.stockAmount}
        </span>
      </div>

      <div className="p-4 flex flex-col grow">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-2">
          {product.category}
        </p>
        <h2 className="text-lg font-semibold text-slate-900 mb-2 h-14 overflow-hidden">
          {product.name}
        </h2>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-xl font-bold text-orange-600">${product.price}</p>
          <span className="text-sm text-slate-500 group-hover:text-slate-800 transition-colors">
            View Details
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
