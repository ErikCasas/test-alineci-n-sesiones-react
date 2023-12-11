import { Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";
import Button from "./Button";

const CardComponet = ({ price, stock, photoUrl, name }) => {
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
              <Button stock={stock} name={name} />
            </CardBody>
          </Stack>
        </Card>
      )
    );
  }
};
export default CardComponet;
