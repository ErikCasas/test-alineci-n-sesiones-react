import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CardComponent = ({ price, stock, photoUrl, name, id }) => {
  {
    return (
      stock > 0 && (
        <Link to={`/products/${id}`}>
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
                <Heading>${price}</Heading>
                <Heading size="md">Disponible {stock}</Heading>

                {stock <= 5 && (
                  <Heading bgColor={"coral"} borderRadius={"10px"}>
                    {" "}
                    Pocas unidades!!
                  </Heading>
                )}
              </CardBody>
            </Stack>
          </Card>
        </Link>
      )
    );
  }
};
export default CardComponent;
