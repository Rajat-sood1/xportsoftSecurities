import React, { useContext, useEffect } from "react";
import Header from "../../layout/header";
import { Navigate, Outlet, useMatch, useParams } from "react-router-dom";
import { Context } from "../../middleware/auth";
import Button from "../../components/Button/Button";
import { Duration, Progress } from "../../utils/TimeFormat/TimeFormat";

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
     const duration = Duration(i);
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
                                   <div className="comp-title d-flex">

                                        <div className="head-1">
                                             <p className="duration">Duration: <span>{duration[0] + ":" + duration[1] + ":" + duration[2]}</span></p>
                                        </div>

                                        <h3>Welcome To The Security Guard Course</h3>
                                        <div className="head-2">

                                             <p>Progress: <span> {progress[0] + ":" + progress[1] + ":" + progress[2]}</span></p>
                                             <Button i={id - 1} />
                                        </div>

                                   </div>
                                   <div className="media">
                                        <iframe className="m-content" title="Module Slides" src={loggedInUser.sub[id - 1].url}></iframe>

                                   </div>
                                   <div className="media">
                                        <div className="comp-title">
                                             <p>
                                                  Welcome To The Security Guard Course
                                             </p>
                                        </div>
                                        <video className="m-content" controls>
                                             <source src={loggedInUser.sub[0].video} type="video/mp4" />
                                             Your browser does not support the video tag.
                                        </video>

                                   </div>

                              </div>
                         </div>
                    </>
               }
          </>

     )
}

export default Module;