
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Utils/Context";

const Nav = () => {
  const [products] = useContext(ProductContext);

  let distinct_category = [...new Set(products?.map((item) => item.category))];

  console.log(distinct_category);

  const color = () => {
    return `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255,0.4)})`
    
  }
  // console.log(color());
  
  // console.log(products);

  return (
    <nav className="w-[14%] h-full bg-zinc-50  flex flex-col items-center pt-5">
      <Link
        to="/create"
        className="px-3 py-3  mb-2 border text-blue-400  border-blue-200 "
      >
        Add New Product
      </Link>
      <h1 className="w-[85%] text-xl">Category Filter</h1>
      <hr className="w-[85%] my-3 bg-black" />
      <div className="w-[80%] ">
        {distinct_category.map(function (c, i) {
          return (
            <Link
              key={i}
              to={`/?category=${c}`}
              className="mb-1 flex items-center gap-3 px-1"
            >
              <span  style={{backgroundColor: color()}} className=" h-[8px] w-[8px] rounded-full"></span>
              {c}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
