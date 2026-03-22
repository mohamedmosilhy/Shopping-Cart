import { NavLink } from "react-router";

const Home = () => {
  return (
    <section className="px-3 sm:px-4 md:px-8 pt-4 md:pt-10 pb-6 md:pb-12 animate-rise">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/60 shadow-xl md:shadow-2xl">
        <img
          src="/images/hero-banner.jpg"
          alt="Fashion Banner"
          className="w-full min-h-140 sm:min-h-155 md:h-155 object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-slate-900/80 via-slate-900/45 to-orange-500/30" />

        <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-5 md:p-8">
          <div className="w-full sm:w-[95%] md:w-[92%] lg:w-[88%] max-w-4xl text-white rounded-2xl p-4 sm:p-6 md:p-10 lg:p-12">
            <p className="uppercase tracking-[0.2em] text-[10px] sm:text-xs md:text-sm text-amber-200 mb-2 md:mb-3">
              New Seasonal Drop
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-3 md:mb-4 wrap-break-word">
              Dress Loud.
              <br />
              Live Refined.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-100 mb-5 md:mb-7 max-w-2xl">
              Curated street-luxe essentials with statement silhouettes, premium
              materials, and modern edge.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
              <NavLink
                to="/shop"
                className="w-full sm:w-auto text-center bg-orange-500 hover:bg-orange-400 text-slate-950 font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg shadow-lg shadow-orange-900/20 transition-all"
              >
                Shop Collection
              </NavLink>
              <a
                href="#featured"
                className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-colors"
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
