import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="w-[86%] h-full pt-28 px-5 flex flex-wrap gap-5 overflow-y-auto   ">
        <Link
          to="details/1"
          id="card"
          className="w-[15%] h-[35vh] rounded border shadow p-1  transition
                        hover:scale-105"
        >
          <div className=" w-full h-[80%] ">
            <img
              className="h-full w-full object-contain transition
                         hover:scale-105"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt=""
            />
          </div>
          <h1 className="text-center hover:text-blue-400 mt-1">
            
            hand bag asda saf kjkfsn{" "}
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Home;
