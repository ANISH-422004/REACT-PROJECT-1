import { useEffect, useState } from "react";
import axios from "../Axios";

const useProducts = () => {
  const [Products, setProducts] = useState(null);

  const fetchProducts = async () => {
    try {
      const { data } = await axios("/products");
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return [Products, setProducts];
};

export default useProducts;
