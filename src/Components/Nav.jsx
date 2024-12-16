import React from 'react'

const Nav = () => {
  return (
    <nav className="w-[14%] h-full bg-zinc-50  flex flex-col items-center pt-5">
    <a
      href="/create"
      className="px-3 py-3  mb-2 border text-blue-400  border-blue-200 "
    >
      Add New Product
    </a>
    <h1 className="w-[85%] text-xl">Category Filter</h1>
    <hr className="w-[85%] my-3 bg-black" />
    <ul className="w-[80%] ">
      <li className="mb-1 flex items-center gap-3 px-1">
        <span className="bg-red-300  h-[8px] w-[8px] rounded-full"></span>
        cat 1
      </li>
      <li className="mb-1 flex items-center gap-3 px-1">
        <span className="bg-green-300  h-[8px] w-[8px] rounded-full"></span>
        cat 2
      </li>
      <li className="mb-1 flex items-center gap-3 px-1">
        <span className="bg-blue-300  h-[8px] w-[8px] rounded-full"></span>
        cat 3
      </li>
    </ul>
  </nav>
  )
}

export default Nav