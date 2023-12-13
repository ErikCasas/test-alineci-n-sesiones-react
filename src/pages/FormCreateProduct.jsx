import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";

const FormCreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [stock, setStock] = useState(0);
  const [sale, setSale] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    let error = {};
    if (name.length <= 3) {
      error.name = "nombre invalido";
    }
    if (price === 0) {
      error.price = "precio invalido";
    }
    if (description.length <= 3) {
      error.description = "descripción invalida";
    }

    if (photoUrl.length <= 3) {
      //también se puede usar una expreción regular
      error.photoUrl = "url invalida";
    }
    if (stock === 0) {
      error.stock = "stock invalido";
    }

    if (Object.keys(error).length === 0) {
      try {
        console.log("first");
        const data = { name, price, description, photoUrl, stock, sale };
        console.log(data);
        await fetch(`http://localhost:8080/api/products`, {
          headers: {
            "Content-Type": "application/json", //recordar express.json
          },
          method: "POST",
          body: JSON.stringify(data),
        });
      } catch (error) {}
    } else {
      console.log("ASdasda");
      setErrors(error);
    }
  };
  return (
    <Box
      height={"90vh"}
      display={"flex"}
      alignItems="center"
      justifyContent="center"
    >
      <form onSubmit={handleSubmit}>
        <Container
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <label htmlFor="name">Nombre del producto</label>
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="price">Precio del producto</label>
          {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}

          <input
            type="number"
            id="price"
            onChange={(e) => setPrice(e.target.valueAsNumber)}
          />

          <label htmlFor="description">descripción del producto</label>
          {errors.description && (
            <p style={{ color: "red" }}>{errors.description}</p>
          )}

          <textarea
            type="hidden"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="photo">Url de la foto del producto</label>
          {errors.photoUrl && <p style={{ color: "red" }}>{errors.photoUrl}</p>}
          <input
            type="text"
            id="photo"
            onChange={(e) => setPhotoUrl(e.target.value)}
          />

          <label htmlFor="stock">Stock disponible</label>
          {errors.stock && <p style={{ color: "red" }}>{errors.stock}</p>}
          <input
            type="number"
            id="stock"
            onChange={(e) => setStock(e.target.valueAsNumber)}
          />

          <label htmlFor="sale">Puede tener promociones</label>
          <input
            type="checkbox"
            id="sale"
            onChange={(e) => setSale(e.target.checked)}
          />
          <button type="submit">enviar</button>
        </Container>
      </form>
    </Box>
  );
};
export default FormCreateProduct;
