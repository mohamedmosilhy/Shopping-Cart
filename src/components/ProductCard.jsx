const ProductCard = ({ product }) => {
  return (
    <div
      className="border rounded-lg shadow-md overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-xl transition-shadow  duration-300"
      onClick={() => {
        window.location.href = `/product/${product.id}`;
      }}
    >
      <div className="h-64 w-full overflow-hidden">
        <img
          src={product.image}
          className="w-full h-full object-cover"
          alt={product.name}
        />
      </div>
      <div className="p-4 flex flex-col grow">
        <h2 className="text-lg font-semibold mb-2 h-14 overflow-hidden">
          {product.name}
        </h2>
        <p className="text-xl font-bold text-blue-600 mb-2">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
