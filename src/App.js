import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About";
import Home from "./pages/Home";
const App = () => {
  return (
    <div style={{"marginLeft":"2em"}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        {/* path * si aucun des liens precises n'a ete appele  */}
        <Route path="*" element={<Home/>}></Route>
      </Routes> 
    </BrowserRouter>
    </div>
  );
};
export default App;
