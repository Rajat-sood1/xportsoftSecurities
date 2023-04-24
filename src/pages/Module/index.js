import React from "react";
import Slides from "../../components/slides";
import Header from "../../layout/header";

const Module = () => {
     return (
          <>
               <Header position={'position'} />
               <div className="comp-container">
                    <div className="comp-title">
                         <h1>Module Slides</h1>
                    </div>
                    <div className="module-sec">
                         <div className="comp-title">
                              <h3>Welcome To The Security Guard Course</h3>
                         </div>
                         <Slides />
                    </div>
               </div>
          </>
     )
}

export default Module;