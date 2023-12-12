import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import MyContext from "../context/myContext";

const ButtonComponent = ({ id, stock, name, quantity }) => {
  const { dispatch } = useContext(MyContext);
  const buyProduct = (id, name, quantity) => {
    dispatch({
      type: "ACTUALIZAR_STOCK",
      payload: {
        id,
        quantity,
      },
    });
    alert(`haz comprado ${quantity} ${name}`);
  };

  // const { rol } = useContext(MyContext); //ejemplo de useContext

  // console.log(rol)

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
