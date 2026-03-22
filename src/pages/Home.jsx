import { NavLink } from "react-router";

const Home = () => {
  return (
    <section className="px-4 md:px-8 pt-6 md:pt-10 pb-8 md:pb-12 animate-rise">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl border border-white/60 shadow-2xl">
        <img
          src="/images/hero-banner.jpg"
          alt="Fashion Banner"
          className="w-full h-130 object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-slate-900/80 via-slate-900/45 to-orange-500/30" />

        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="p-6 md:p-12 max-w-2xl text-white">
            <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-amber-200 mb-3">
              New Seasonal Drop
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Dress Loud.
              <br />
              Live Refined.
            </h1>
            <p className="text-base md:text-lg text-slate-100 mb-7 max-w-xl">
              Curated street-luxe essentials with statement silhouettes, premium
              materials, and modern edge.
            </p>

            <div className="flex flex-wrap gap-3">
              <NavLink
                to="/shop"
                className="bg-orange-500 hover:bg-orange-400 text-slate-950 font-semibold py-3 px-6 rounded-lg shadow-lg shadow-orange-900/20 transition-all"
              >
                Shop Collection
              </NavLink>
              <a
                href="#featured"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Explore Looks
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
