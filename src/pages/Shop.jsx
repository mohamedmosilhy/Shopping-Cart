import ProductCard from "../components/ProductCard";
import { products } from "../services/products";

const Shop = () => {
  return (
    <section id="featured" className="px-4 md:px-8 pb-10 md:pb-14 animate-rise">
      <div className="max-w-6xl mx-auto">
        <header className="mb-7 mt-2 md:mb-9 glass-panel rounded-2xl px-5 md:px-7 py-5 border border-white/60">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
            Curated Essentials
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Shop The Collection
          </h1>
          <p className="text-slate-600 mt-2 max-w-2xl">
            Discover modern staples and standout pieces designed for effortless
            everyday style.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
