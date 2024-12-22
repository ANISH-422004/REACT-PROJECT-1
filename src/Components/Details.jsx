import axios from "../Utils/Axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const Details = () => {
  const [product, setproduct] = useState(null);

  const { id } = useParams();
  // console.log(id);

  const getsingleproduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      console.log(data);
      setproduct(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getsingleproduct();
  }, []);

  return product ? (
      <div className="w-[70%] h-[90%]  gap-30 m-auto p-[5%] bg-re-100 flex gap-20 items-center justify-center">
        <img
          className="h-[50vh] aspect-square object-contain"
          src={product.image}
          alt=""
        />
        <div className="content h-[50vh] flex flex-col gap-3">
          <h1 className="text-5xl font-semibold">{product.title}</h1>
          <h2 className="text-zinc-600">{product.category}</h2>
          <h2 className="text-red-400 text-xl ">${product.price}</h2>
          <p className="text-zinc-600 text-sm font-semibold ">
            {product.description}
          </p>
          <Link className="px-2 py-1  w-[50%] mb-2 border border-b-4 text-blue-400  border-blue-200 ">
            Edit
          </Link>
          <Link className="px-2 py-1  w-[50%] mb-2 border border-b-4  text-red-400  border-red-200 ">
            Delete
          </Link>
        </div>
      </div>
  ) : (
    <div className="w-full  h-full flex justify-center  items-center ">
      <h1 className="text-5xl">Loading...</h1>
    </div>
  );
};

export default Details;
