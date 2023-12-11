import { Button, Stack, useColorMode } from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack spacing={4} direction="row"  padding="12px">
      <Button colorScheme="facebook">Inicio</Button>
      <Button colorScheme="facebook">Perfil</Button>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Stack>
  );
};
export default Header;
