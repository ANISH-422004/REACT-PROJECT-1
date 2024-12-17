import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import {ProductContext} from "../Utils/Context"
const Home = () => {
  const [products] =  useContext(ProductContext)
  // console.log(products);
  
  return  products ? (
    <>
      <Nav />
      <div className="w-[86%] h-full pt-28 px-5 flex flex-wrap gap-5 overflow-y-auto   ">
        
        {
          products.map((p,i)=>{
            // console.log(p);
            
            return(
              <Link
              key={i}
              to={`details/${p.id}`}
              id="card"
              className="w-[20%] h-[40vh] rounded border shadow p-1  transition
                            hover:scale-105 overflow-hidden"
            >
              <div className=" w-full h-[80%] ">
                <img
                  className="h-full w-full object-contain transition
                             hover:scale-105"
                  src={p.image}
                  alt=""
                />
              </div>
              <h1 className="text-center text-xs hover:text-blue-400 mt-1">
                
                {p.title}
              </h1>
            </Link>
    
            )
          })
        }



      </div>
    </>
  ):(
    <h1>Loading...</h1>
  )
};

export default Home;
