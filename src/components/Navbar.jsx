import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between shadow-md w-full px-8 py-4 bg-white border-b border-slate-200">
      <div className="logo flex items-center gap-2 font-bold text-2xl font-serif">
        <img src="/public/favicon.svg" alt="logo" className="w-10" />
        URBANE
      </div>
      <ul className="flex text-sm font-medium gap-8 tracking-wide uppercase">
        <li>
          <NavLink to="/" className="hover:text-slate-600 transition-colors">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className="hover:text-slate-600 transition-colors"
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className="hover:text-slate-600 transition-colors"
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
