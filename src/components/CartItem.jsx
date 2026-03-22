const CartItem = ({ item, onDecrease, onIncrease, onChangeQuantity }) => {
  const isMaxReached = item.cartAmount >= item.stockAmount;

  return (
    <article className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div>
          <h2 className="font-semibold text-lg text-slate-900">{item.name}</h2>
          <p className="text-slate-600">${item.price.toFixed(2)} each</p>
          <p className="text-sm text-slate-500">In stock: {item.stockAmount}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onDecrease}
          className="w-9 h-9 border border-slate-300 rounded-md font-semibold hover:bg-slate-100 transition-colors"
          aria-label={`Decrease quantity of ${item.name}`}
        >
          -
        </button>

        <input
          type="number"
          min="0"
          max={item.stockAmount}
          value={item.cartAmount}
          onChange={(e) => onChangeQuantity(e.target.value)}
          className="w-16 h-9 border border-slate-300 rounded-md px-2 text-center"
          aria-label={`Quantity of ${item.name}`}
        />

        <button
          type="button"
          onClick={onIncrease}
          disabled={isMaxReached}
          className="w-9 h-9 border border-slate-300 rounded-md font-semibold hover:bg-slate-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={`Increase quantity of ${item.name}`}
        >
          +
        </button>
      </div>

      <div className="text-lg font-semibold text-slate-900">
        ${(item.price * item.cartAmount).toFixed(2)}
      </div>
    </article>
  );
};

export default CartItem;
