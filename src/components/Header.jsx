import { Button, Stack, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack spacing={4} direction="row" padding="12px">
      <Link to={""}>
        <Button colorScheme="facebook">Inicio</Button>
      </Link>
      <Link to={"/aboutUs"}>
        <Button colorScheme="facebook">About</Button>
      </Link>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Stack>
  );
};
export default Header;
