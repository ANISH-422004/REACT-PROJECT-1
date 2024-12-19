import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../Utils/Context";
import axios from "../Utils/Axios";

const Home = () => {
  const [products] = useContext(ProductContext); // From context.jsx, entire 30 products
  const { search } = useLocation();
  const category = search ? decodeURI(search.split("=")[1]) : ""; // Get category or default to empty string

  const [Filteredproducts, setFilteredproducts] = useState(products || []); // Initialize with all products if available

  const getfilteredproducts = async () => {
    if (!category) {
      setFilteredproducts(products); // Show all products if no category is selected
      return;
    }
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilteredproducts(data);
    } catch (err) {
      console.error("Error fetching filtered products:", err);
    }
  };

  useEffect(() => {
    if (products && category) {
      getfilteredproducts();
    } else if (products) {
      setFilteredproducts(products); // Fallback to all products when no category is selected
    }
  }, [category, products]);

  return products ? (
    <>
      <Nav />
      <div className="w-[86%] h-full pt-28 px-5 flex flex-wrap gap-5 overflow-y-auto">
        {Filteredproducts.length > 0 ? (
          Filteredproducts.map((p, i) => (
            <Link
              key={i}
              to={`details/${p.id}`}
              id="card"
              className="w-[20%] h-[40vh] rounded border shadow p-1 transition hover:scale-105 overflow-hidden"
            >
              <div className="w-full h-[80%]">
                <img
                  className="h-full w-full object-contain transition hover:scale-105"
                  src={p.image}
                  alt=""
                />
              </div>
              <h1 className="text-center text-xs hover:text-blue-400 mt-1">
                {p.title}
              </h1>
            </Link>
          ))
        ) : (
          <h1>No products found.</h1>
        )}
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Home;
