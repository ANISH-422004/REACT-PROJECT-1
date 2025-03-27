import { createContext } from "react";
import useProducts from "./hooks/getProducts";

export const ProductContext = createContext();

const Context = (props) => {

  const [Products, setProducts] = useProducts(); // Using the custom hook for fetching products from API

  return (
    <ProductContext.Provider value={[Products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
