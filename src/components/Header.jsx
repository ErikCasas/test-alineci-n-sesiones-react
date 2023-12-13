import { Button, Stack, useColorMode } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../context/myContext";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { state } = useContext(MyContext);
  return (
    <Stack spacing={4} direction="row" padding="12px">
      <Link to={""}>
        <Button colorScheme="facebook">Inicio</Button>
      </Link>
      <Link to={"/aboutUs"}>
        <Button colorScheme="facebook">About</Button>
      </Link>
      {state.user.rol === "admin" && (
        <Link to={"/products/create"}>
          <Button colorScheme="red">Form</Button>
        </Link>
      )}
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Stack>
  );
};
export default Header;
