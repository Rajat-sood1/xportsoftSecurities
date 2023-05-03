import React, { useContext, useEffect } from "react";
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
     }, [x])



     //   DESTRUCTURING OF GLOBAL STATES USING USECONTEXT
     const { loggedInUser } = useContext(Context);

     // REQUESTED PARAMS FOR DYNAMIC ROUTING
     const { id } = useParams();
     const match = useMatch({ path: '/modules/:id/quiz' });

     // NAVIGATE IS USER IS LOGGED OUT
     if (!loggedInUser.login) {
          return <Navigate to='/' replace={true} />;
     }
     return (
          <>
               <Header position={'position'} />
               {match
                    ?
                    <Outlet />
                    :
                    <>
                         <div className="comp-container">
                              <div className="comp-title">
                                   <h1>Module Slides</h1>
                              </div>
                              <div className="module-sec">
                                   <div className="comp-title">
                                        <h3>Welcome To The Security Guard Course</h3>
                                   </div>
                                   <iframe title="Module Slides" src={loggedInUser.sub[id - 1].url}></iframe>
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