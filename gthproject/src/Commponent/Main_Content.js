import React from 'react'
import imege1 from "../img/php.png";
import imege2 from "../img/python.png";
import imege3 from "../img/mern.png";
import imege4 from "../img/software.png";
import imege5 from "../img/java_full_stack.png";
import imege6 from "../img/.net.png";



const Main_Content = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row m-5" style={{ justifyContent: "space-evenly" }}>
          <div class="col-md-3 col-sm-6 main_content">
            <img src={imege1} class="img-fluid" width={{ width: "100%" }} alt="..." />
          </div>
          <div class="col-md-3 col-sm-6 main_content">
            <img src={imege2} class="img-fluid" width={{ width: "100%" }} alt="..." />
          </div>
          <div class="col-md-3 col-sm-6 main_content">
            <img src={imege3} class="img-fluid" width={{ width: "100%" }} alt="..." />
          </div>
        </div>
        <div class="row m-5" style={{ justifyContent: "space-evenly" }}>
          <div class="col-md-3 col-sm-6 main_content">
            <img src={imege4} class="img-fluid" width={{ width: "100%" }} alt="..." />
          </div>
          <div class="col-md-3 col-sm-6 main_content">
            <img src={imege5} class="img-fluid" width={{ width: "100%" }} alt="..." />
          </div>
          <div class="col-md-3 col-sm-6 main_content">
            <img src={imege6} class="img-fluid" width={{ width: "100%" }} alt="..." />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main_Content
