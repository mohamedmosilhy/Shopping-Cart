import { useContext } from "react";
import { NavLink } from "react-router";
import cartContext from "../context/CartContext";

const Navbar = () => {
  const { getTotalItems } = useContext(cartContext);
  const totalItems = getTotalItems();
  const navLinkClass = ({ isActive }) =>
    `transition-colors ${isActive ? "text-slate-900" : "text-slate-600 hover:text-slate-900"}`;

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/40 glass-panel">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">
        <div className="logo flex items-center gap-3 font-bold text-2xl font-serif">
          <img src="/favicon.svg" alt="logo" className="w-9" />
          <span className="tracking-wide">URBANE</span>
        </div>
        <ul className="flex text-sm font-semibold gap-6 md:gap-8 tracking-wide uppercase items-center">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className={navLinkClass}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `${navLinkClass({ isActive })} inline-flex items-center gap-2`
              }
            >
              <span>Cart</span>
              <span className="min-w-6 h-6 px-2 rounded-full bg-slate-900 text-amber-100 text-xs inline-flex items-center justify-center shadow-sm">
                {totalItems}
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
