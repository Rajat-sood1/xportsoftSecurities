import React, { useContext, useEffect } from "react";
import Slides from "../../components/slides";
import Header from "../../layout/header";
import { NavLink, Navigate, Outlet, useMatch, useParams } from "react-router-dom";
import { Context } from "../../middleware/auth";

const Module = () => {
     const { x } = useContext(Context)

     useEffect(() => {
          console.log("Mounted...");
          return () => {
               clearInterval(x)
          }
     })
 


     //   DESTRUCTURING OF GLOBAL STATES USING USECONTEXT
     const { modules, loggedInUser } = useContext(Context);

     // REQUESTED PARAMS FOR DYNAMIC ROUTING
     const { id } = useParams();
     const match = useMatch({ path: '/:module/:id/quiz' });

     // NAVIGATE IS USER IS LOGGED OUT
     if (!loggedInUser.login) {
          return <Navigate to='/' replace={true} />;
     }
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
                                   <Slides src={modules[id].url} />
                                   <div className="q-link">
                                        <div className="q-animate">
                                             <p>Click here to submit <b>Quiz</b></p>
                                             <span>&#11167;</span>
                                        </div>
                                        <NavLink to='quiz'><button className="btn">Take Quiz</button></NavLink>
                                   </div>
                              </div>
                         </div>
                    </>
               }
          </>

     )
}

export default Module;