import Card from "./components/Card";
import Header from "./components/Header";
import products from "./data";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        {products.map((product) => (
          <Card
            price={product.price}
            photoUrl={product.photoUrl}
            stock={product.stock}
            name={product.name}
            key={product.name}
          />
        ))}
      </div>
    </>
  );
}

export default App;
