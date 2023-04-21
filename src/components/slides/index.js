import React from "react";
import modules from "../../utils/modules";

const Slides = () =>{
     let module = modules;
     return (

          <div>
               <iframe src={module[0].url} width="720px" height="480px" frameBorder="0">This is an embedded </iframe>
          </div>
     )
}

export default Slides;