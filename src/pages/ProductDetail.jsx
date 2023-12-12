import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../context/myContext";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import ButtonComponent from "../components/Button";

const ProductDetail = () => {
  const [count, setCount] = useState(0);

  const { idProduct } = useParams();

  const { state, dispatch } = useContext(MyContext);

  useEffect(() => {
    fetch(`http://localhost:8080/api/products/${idProduct}`)
      .then((res) => res.json())
      .then(({ product }) =>
        dispatch({ type: "PRODUCT_DETAIL", payload: product })
      );
  }, []);

  console.log(state);

  return (
    <Box
      height={"90vh"}
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
      p={"50px"}
    >
      <Card maxH="ms" maxW={"auto"}>
        <CardBody display={"flex"} gap={"10px"}>
          <Image
            src={state.productDetail?.photoUrl}
            alt="img"
            objectFit="contain"
            maxW={{ base: "100%", sm: "200px" }}
            borderRadius="lg"
            />
          <Stack mt="6" spacing="3">
            <Heading size="md">{state.productDetail?.name}</Heading>
            <Text>{state.productDetail?.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${state.productDetail?.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
            
            <ButtonComponent
                  stock={state.productDetail?.stock}
                  name={state.productDetail?.name}
                  quantity={count}
                  id={state.productDetail?._id}
                />

                <Button onClick={() => setCount(count + 1)}>+</Button>
                <Button onClick={() => setCount(count - 1)}>-</Button>
                <Heading >{count}</Heading>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
};
export default ProductDetail;
