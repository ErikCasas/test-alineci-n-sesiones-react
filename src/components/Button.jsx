import { Button } from "@chakra-ui/react";

const ButtonComponent = ({ id, stock, name, updateProduct, quantity }) => {
  const buyProduct = (id, name, quantity) => {
    updateProduct(id, quantity);
    alert(`haz comprado ${quantity} ${name}`);
  };
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
