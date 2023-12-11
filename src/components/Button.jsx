const Button = ({ stock, name }) => {
  if (stock <= 5) {
    return (
      <button onClick={() => console.log(`haz comprado ${name}`)}>
        Aprovechar!
      </button>
    );
  } else {
    return (
      <button onClick={() => console.log(`haz comprado ${name}`)}>
        Comprar!
      </button>
    );
  }
};
export default Button;
