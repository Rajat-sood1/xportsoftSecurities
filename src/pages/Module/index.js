import React, { useContext, useEffect } from "react";
import Header from "../../layout/header";
import { Navigate, Outlet, useMatch, useParams } from "react-router-dom";
import { Context } from "../../middleware/auth";
import Button from "../../components/Button/Button";
import { Progress } from "../../utils/TimeFormat/TimeFormat";

const Module = () => {
     const { x } = useContext(Context)
     console.log("Module component")

     useEffect(() => {
          console.log(x)
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
     const i = id - 1;
     const progress = Progress(i);
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
                                        {progress[0] + ":" + progress[1] + ":" + progress[2]}
                                   </div>
                                   <iframe title="Module Slides" src={loggedInUser.sub[id - 1].url}></iframe>
                                   <div className="q-link">
                                        <div className="q-animate">
                                             <p>Click here to submit <b>Quiz</b></p>
                                             <span>&#11167;</span>
                                        </div>
                                        <Button i={id - 1} />
                                   </div>
                              </div>
                         </div>
                    </>
               }
          </>

     )
}

export default Module;