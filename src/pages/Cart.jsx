import { useContext } from "react";
import cartContext from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } =
    useContext(cartContext);

  if (cartItems.length === 0) {
    return <div className="p-6 text-lg">Your cart is empty.</div>;
  }

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <article
            key={item.id}
            className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-slate-600">${item.price}</p>
                <p className="text-sm text-slate-500">
                  Stock: {item.stockAmount}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 border rounded hover:bg-slate-100"
              >
                -
              </button>
              <input
                type="number"
                min="0"
                max={item.stockAmount}
                value={item.cartAmount}
                onChange={(e) => updateQuantity(item.id, e.target.value)}
                className="w-16 border rounded px-2 py-1 text-center"
              />
              <button
                type="button"
                onClick={() => updateQuantity(item.id, item.cartAmount + 1)}
                className="px-3 py-1 border rounded hover:bg-slate-100"
              >
                +
              </button>
            </div>

            <div className="font-semibold text-lg">
              ${(item.price * item.cartAmount).toFixed(2)}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-right text-2xl font-bold">
        Total: ${getTotalPrice().toFixed(2)}
      </div>
    </section>
  );
};

export default Cart;
