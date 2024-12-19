import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "./Axios";

export const ProductContext = createContext();

const Context = (props) => {
  const [Products, setProducts] = useState(null);
  const getProducts = async () => {
    try {
      const { data } = await axios("/products");
      // console.log(data );
      setProducts(data)
    } catch (err) {
      console.log(err);
    }
  }; // fetching data and wating for the data to get fetched 
  useEffect(() => {  
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={[Products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
