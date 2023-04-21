import React from "react";
import Slides from "../../components/slides";
import Header from "../../layout/header";

const Module = () => {
     return (
          <>
               <Header position={'position'} />
               <div className="body">
                    <Slides />
               </div>
          </>
     )
}

export default Module;