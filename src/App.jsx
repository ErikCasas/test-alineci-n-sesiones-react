import { Grid } from "@chakra-ui/react";
import Card from "./components/Card";
import Header from "./components/Header";
import { useContext, useEffect } from "react";
import MyContext from "./context/myContext";
function App() {
  const { state, dispatch } = useContext(MyContext);
  //useEffect para hacer la suscripción inicial
  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then(({ products }) => dispatch({ type: "LLENAR", payload: products }));
  }, []);

  useEffect(() => {
    console.log(
      "Se debe realizar una petición para actualizar los productos en la base de datos"
    );
  }, [state.products]);


  //quedá como parte del prroyecto integrador migrar esta lógica para realizarla desde el reducer
  const updateProduct = (id, quantity) => {
    const index = products.findIndex((p) => p._id === id);
    const listProducts = products;
    listProducts[index].stock = listProducts[index].stock - quantity;
    setProducts([...listProducts]);
  };
  return (
    <>
      <Header />
      <Grid templateColumns="repeat(2, 1fr)" gap={"15px"} margin={"55px"}>
        {state?.products.map((product) => (
          <Card
            price={product.price}
            photoUrl={product.photoUrl}
            stock={product.stock}
            name={product.name}
            key={product._id}
            id={product._id}
            updateProduct={updateProduct}
          />
        ))}
      </Grid>
    </>
  );
}

export default App;
