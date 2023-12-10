import Button from "./Button";

const Card = () => {
  const infoProduct = {
    price: 500,
    stock: 5,
    photoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_801366-MCO69299012103_052023-F.webp",
    sale: false,
    name: "Fifine Micrófono Dinámico, Micrófono De Pc De Grabación",
  };
  return (
    <div className="card">
      <img src={infoProduct.photoUrl} alt="product" className="product-img"/>
      <section>
        <p>{infoProduct.name}</p>
        <p>${infoProduct.price}</p>
      </section>
      <Button />
    </div>
  );
};
export default Card;
