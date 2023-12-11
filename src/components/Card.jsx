import Button from "./Button";

const Card = ({ price, stock, photoUrl, name }) => {
  {
    return (
      stock > 0 && (
        <div className={stock<=5?"card-red":"card"}>
          <img src={photoUrl} alt="product" className="product-img" />
          <section>
            <p>{name}</p>
            {stock <= 5 && <p> Pocas unidades!!</p>}
            <p>${price}</p>
          </section>
          <Button stock={stock} name={name} />
        </div>
      )
    );
  }
};
export default Card;
