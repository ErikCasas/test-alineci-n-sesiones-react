import { Grid } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import MyContext from "../context/myContext";
import CardComponent from "../components/CardComponent"

const Home = () => {
  const { state, dispatch } = useContext(MyContext);
  //useEffect para hacer la suscripción inicial
  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then(({ products }) => dispatch({ type: "LLENAR", payload: products }));
  }, []);


  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={"15px"} margin={"55px"}>
      {state?.products.map((product) => (
        <CardComponent
          price={product.price}
          photoUrl={product.photoUrl}
          stock={product.stock}
          name={product.name}
          key={product._id}
          id={product._id}
        />
      ))}
    </Grid>
  );
};
export default Home;
