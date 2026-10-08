import Product from "./Product";

function App() {
  return (
    <div>
      <h1>My Products</h1>

      <Product
        name="Laptop"
        price={55000}
        category="Electronics"
      />

      <Product
        name="Headphones"
        price={2500}
        category="Audio"
      />

      <Product
        name="Keyboard"
        price={1200}
        category="Accessories"
      />
    </div>
  );
}

export default App;