function Product({ name, price, category }) {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>₹{price}</p>
      <p>{category}</p>
    </div>
  );
}

export default Product;