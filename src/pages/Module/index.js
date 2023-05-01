import React from "react";
import Slides from "../../components/slides";
import Header from "../../layout/header";
import { NavLink, Outlet, useMatch, useParams } from "react-router-dom";
import Modules from "../../data/Modules";

const Module = () => {
     const modules = Modules;
     const { module, id } = useParams();
     const match = useMatch({ path: '/module/1/quiz' });
     document.title = module;
     return (
          <>
               {match ?
                    <Outlet />
                    :
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
                                   <Slides src={modules[id - 1].url} />
                                   <div className="q-link">
                                        <div className="q-animate">
                                             <p>Click here to submit <b>Quiz</b></p>
                                             <span>&#11167;</span>
                                        </div>
                                        <NavLink to="/module/1/quiz"><button className="btn">Take Quiz</button></NavLink>
                                   </div>
                              </div>
                         </div>
                    </>
               }
          </>

     )
}

export default Module;