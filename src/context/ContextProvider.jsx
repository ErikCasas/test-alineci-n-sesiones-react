import { useReducer } from "react";
import MyContext from "./myContext";
const ContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      // nombre provisional para dar un mejor ejemplo
      case "LLENAR":
        return {
          ...state,
          products: action.payload,
        };

      case "ACTUALIZAR_STOCK": {
        const index = state.products.findIndex(
          (p) => p._id === action.payload.id
        );
        const listProducts = state.products;
        listProducts[index].stock =
          listProducts[index].stock - action.payload.quantity;
        return {
          ...state,
          products: [...listProducts],
        };
      }

      case "PRODUCT_DETAIL": {
        return {
          ...state,
          productDetail: action.payload,
        };
      }

      default:
        return { ...state };
    }
  };

  const estadoInicial = {
    //inicializar primero el estado vacío, luego con el usuario, para explicar porqué => ...state
    usuario: {
      nombre: "Erik",
      rol: "admin",
    },
    products: [],
  };
  const [state, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};
export default ContextProvider;
