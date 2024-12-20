import React from "react";
import Home from "./Components/Home";
import { Routes , Route } from "react-router-dom";
import Details from "./Components/Details";
const App = () => {
  return (
    <div className="h-screen w-full flex ">
      
    
      <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/details/:id" element={<Details/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
