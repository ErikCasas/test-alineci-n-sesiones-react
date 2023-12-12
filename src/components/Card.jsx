import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import ButtonComponent from "./Button";
import useCounter from "../hooks/useCounter";

const CardComponet = ({ price, stock, photoUrl, name, id }) => {
  const [count, sum, res] = useCounter();
  {
    return (
      stock > 0 && (
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="elevated"
          height="300px"
          border={"2px"}
          borderStyle={"solid"}
          borderColor={"black"}
        >
          <Image
            objectFit="contain"
            maxW={{ base: "100%", sm: "200px" }}
            src={photoUrl}
          />
          <Stack>
            <CardBody>
              <Heading size="md">{name}</Heading>
              {stock <= 5 && <Heading> Pocas unidades!!</Heading>}
              <Heading>${price}</Heading>
              <Heading>Disponible {stock}</Heading>

              <ButtonComponent
                stock={stock}
                name={name}
                quantity={count}
                id={id}
              />

              <Button onClick={() => sum()}>+</Button>
              <Button onClick={() => res()}>-</Button>
              <Heading>{count}</Heading>
            </CardBody>
          </Stack>
        </Card>
      )
    );
  }
};
export default CardComponet;
