import { Grid } from "@chakra-ui/react";
import Card from "./components/Card";
import Header from "./components/Header";
import products from "./data";
function App() {
  return (
    <>
      <Header />
      <Grid templateColumns="repeat(2, 1fr)" gap={"15px"} margin={"55px"}>
        {products.map((product) => (
          <Card
            price={product.price}
            photoUrl={product.photoUrl}
            stock={product.stock}
            name={product.name}
            key={product.name}
          />
        ))}
      </Grid>
    </>
  );
}

export default App;
