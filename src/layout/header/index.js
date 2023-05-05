import React, { useContext, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../middleware/auth";

const Header = () => {
     let { loggedInUser, setLoggedInUser } = useContext(Context);
     const navbar = useRef();

     const [drop, SetDrop] = useState(false);

     window.onscroll = () => {
          if (navbar.second !== null) {
               let sticky = navbar.second?.offsetTop;

               if (window.pageYOffset >= sticky) {
                    navbar.first.classList.add("sticky")
               } else {
                    navbar.first.classList.remove("sticky");
               }
          }
     }

     return (
          //   HEADER SECTION
          <div className="header">
               <div className="d-flex">

                    {/*       LOGO       */}
                    <div className="head-logo">
                         <div className="logo"></div>
                    </div>

                    {/*       USER PROFILE AND MODULE STATUS      */}
                    <div className="head-nav">
                         <div className="user-nav d-flex">
                              <div className="runner">
                                   <p>Welcome {loggedInUser.Name}!</p>
                              </div>
                              <div className="user">
                                   <div className="profile d-flex">
                                        <div className="user-details d-flex " onClick={() => SetDrop(!drop)} >
                                             <div>

                                                  <p>{loggedInUser.Name}</p>
                                                  <sub>student</sub>
                                             </div>
                                             <span className={drop ? 'after rotate' : 'after '}  >&#9662;</span>
                                        </div>
                                   </div>
                              </div>

                              {/*   DROPDOWN FOR LOGOUT AND CHANGE PASSWORD */}
                              {drop ?
                                   <div className="drop">
                                        <ul>
                                             <li>
                                                  <button className="btn"> change Password</button>
                                             </li>
                                             <li>
                                                  <button className="btn" onClick={() => {
                                                       setLoggedInUser((e) => ({ ...e, login: false }))
                                                  }}> logOut</button>
                                             </li>
                                        </ul>
                                   </div>
                                   : ""
                              }
                         </div>

                         {/*       NAVBAR          */}
                         <div className="navbar" ref={(el) => (navbar.first = el)}>
                              <ul className="nav-links">
                                   <NavLink to='/dashboard'><li>Dashboard</li></NavLink>
                                   <NavLink to='/modules'><li>Training</li></NavLink>
                                   <li>Settings</li>
                              </ul>
                         </div>
                         <div className="content" ref={(el) => (navbar.second = el)}></div>
                    </div>
               </div>
          </div>
     )
}

export default Header;