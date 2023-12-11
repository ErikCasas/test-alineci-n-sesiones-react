import { Button } from "@chakra-ui/react";

const ButtonComponent = ({ stock, name }) => {
  if (stock <= 5) {
    return (
      <Button
        colorScheme="red"
        onClick={() => console.log(`haz comprado ${name}`)}
      >
        Aprovechar!
      </Button>
    );
  } else {
    return (
      <Button
        colorScheme="facebook"
        onClick={() => console.log(`haz comprado ${name}`)}
      >
        Comprar!
      </Button>
    );
  }
};

export default ButtonComponent;
