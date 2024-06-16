import React from "react";
import {Routes, Route} from "react-router-dom";

import Navbar from "./Commponent/Navbar";
import About from "./Commponent/About";
import Home from "./Commponent/Home";
import Footer from "./Commponent/Footer";
import Services from "./Commponent/Services";
import StudentLogin from "./Commponent/StudentLogin";
import Placement from "./Commponent/Placement";




function App(){
  return(
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>} />
        <Route path="/Services" element={<Services/>}/>
        <Route path="/StudentLogin" element={<StudentLogin/>}/>
        <Route path="/Placements" element={<Placement/>}/>
      </Routes>
      
      <Footer/>
       </>
  )
}
export default App;