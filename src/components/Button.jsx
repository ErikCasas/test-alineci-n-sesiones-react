import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import MyContext from "../context/myContext";

const ButtonComponent = ({ id, stock, name, quantity }) => {
  const { dispatch } = useContext(MyContext);

  //-------------------------------------------------
  const buyProduct = async (id, name, quantity) => {
    try {
      const data = { stock: stock - quantity }; //esto es debido a un error mio || se debe definir un endpoint para solo la "compra" de productos
      await fetch(`http://localhost:8080/api/products/${id}`, {
        headers: {
          "Content-Type": "application/json", //recordar express.json
        },
        method: "PUT",
        body: JSON.stringify(data),
      });

      dispatch({
        type: "UPDATE_STOCK",
        payload: {
          id,
          quantity,
        },
      });
      alert(`haz comprado ${quantity} ${name}`);
    } catch (error) {
      console.log(error);
    }
  };
  //-------------------------------------------------

  if (stock <= 5) {
    return (
      <Button colorScheme="red" onClick={() => buyProduct(id, name, quantity)}>
        Aprovechar!
      </Button>
    );
  } else {
    return (
      <Button
        colorScheme="facebook"
        onClick={() => buyProduct(id, name, quantity)}
      >
        Comprar!
      </Button>
    );
  }
};

export default ButtonComponent;
