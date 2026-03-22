import { useContext } from "react";
import { Link } from "react-router";
import cartContext from "../context/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
  } = useContext(cartContext);

  const totalPrice = getTotalPrice();
  const shipping = cartItems.length > 0 ? 9.99 : 0;
  const grandTotal = totalPrice + shipping;

  if (cartItems.length === 0) {
    return (
      <section className="p-6 md:p-10 animate-rise">
        <div className="max-w-xl mx-auto text-center glass-panel border border-white/70 rounded-3xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Your cart is empty
          </h1>
          <p className="text-slate-600 mb-6">
            Looks like you have not added anything yet. Explore the shop and add
            your first item.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center px-5 py-3 rounded-lg bg-orange-500 text-slate-950 font-semibold hover:bg-orange-400 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="p-6 md:p-10 animate-rise">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-6">
          <h1 className="text-3xl font-bold text-slate-900">Your Cart</h1>
          <p className="text-slate-600">{getTotalItems()} items</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onDecrease={() => removeFromCart(item.id)}
                onIncrease={() => updateQuantity(item.id, item.cartAmount + 1)}
                onChangeQuantity={(value) => updateQuantity(item.id, value)}
              />
            ))}
          </div>

          <aside className="glass-panel border border-white/70 rounded-2xl shadow-lg p-5 h-fit">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Order Summary
            </h2>
            <div className="space-y-2 text-slate-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-200 flex justify-between text-lg font-bold text-slate-900">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="button"
              className="mt-5 w-full px-4 py-3 rounded-lg bg-slate-900 text-amber-100 font-medium hover:bg-slate-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Cart;
