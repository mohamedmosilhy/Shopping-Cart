import { NavLink } from "react-router";

const Home = () => {
  return (
    <section className="w-full relative">
      <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&h=900&fit=crop&q=80"
        alt="Fashion Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-10 ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Store
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Discover the latest trends in fashion and accessories.
        </p>
        <NavLink
          to="/shop"
          className="bg-[#0f172a] hover:bg-[#1e293b] text-white font-semibold py-3 px-6 rounded"
        >
          Shop Now
        </NavLink>
      </div>
    </section>
  );
};

export default Home;
