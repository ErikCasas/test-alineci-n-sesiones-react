import { useReducer } from "react";
import MyContext from "./myContext";
//                     Explicar que la prop children nos permite crear componentes que abrazen
const ContextProvider = ({ children }) => {
  //ejemplo para useContext
  //   const valoresDeEjmplo = {
  //     nombre: "Erik",
  //     edad: 21,
  //     rol: "Admin",
  //   };

  const reducer = (state, action) => {
    switch (action.type) {
      // nombre provisional para dar un mejor ejemplo
      case "LLENAR":
        return {
          ...state,
          products: action.payload,
        };

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
