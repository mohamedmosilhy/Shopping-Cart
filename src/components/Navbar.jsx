import { useContext, useState } from "react";
import { NavLink } from "react-router";
import cartContext from "../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useContext(cartContext);
  const totalItems = getTotalItems();
  const navLinkClass = ({ isActive }) =>
    `transition-colors ${
      isActive ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
    }`;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/40 glass-panel">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="logo flex items-center gap-2 md:gap-3 font-bold text-xl md:text-2xl font-serif">
            <img src="/favicon.svg" alt="logo" className="w-8 md:w-9" />
            <span className="tracking-wide">URBANE</span>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-300 text-slate-700 hover:bg-white/70"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="text-xl leading-none">
              {isMenuOpen ? "x" : "="}
            </span>
          </button>

          <ul className="hidden md:flex text-sm font-semibold gap-6 md:gap-8 tracking-wide uppercase items-center">
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

        {isMenuOpen ? (
          <ul className="md:hidden mt-3 pt-3 border-t border-slate-200/70 flex flex-col gap-1 text-sm font-semibold uppercase tracking-wide">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${navLinkClass({ isActive })} block px-3 py-2 rounded-lg hover:bg-white/70`
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `${navLinkClass({ isActive })} block px-3 py-2 rounded-lg hover:bg-white/70`
                }
                onClick={closeMenu}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `${navLinkClass({ isActive })} flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/70`
                }
                onClick={closeMenu}
              >
                <span>Cart</span>
                <span className="min-w-6 h-6 px-2 rounded-full bg-slate-900 text-amber-100 text-xs inline-flex items-center justify-center shadow-sm">
                  {totalItems}
                </span>
              </NavLink>
            </li>
          </ul>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
