import React from "react";
import Home from "./Components/Home";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Details from "./Components/Details";
import Create from "./Components/Create";
const App = () => {
  const { search, pathname } = useLocation();
  console.log(search, "+", pathname);

  return (
    <div className="h-screen w-full flex ">
      {(pathname != "/" || search.length > 0) && (
        <Link to="/" className="absolute m-2 top-[5%] left-[14.5%]">
          <span className="font-semibold border border-red-300 text-xl text-red-300 p-1  ">
            Home
          </span>{" "}
        </Link>
      )}

      <Routes>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
};

export default App;
