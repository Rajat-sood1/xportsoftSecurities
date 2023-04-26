import React, { useRef } from "react";
// import Users from "../../utils/users/index"
import { NavLink } from "react-router-dom";

const Header = () => {

     const navbar = useRef();
     const content = useRef();
     window.onscroll = () => {
          let sticky = content.current.offsetTop;
          if (content) {

               if (window.pageYOffset >= sticky) {
                    navbar.current.classList.add("sticky")
               } else {
                    navbar.current.classList.remove("sticky");
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
                                   <p>Welcome User!</p>
                              </div>
                              <div className="user">
                                   <div className="profile d-flex">
                                        <div className="user-details">
                                             <p>John Doe</p>
                                             <sub>student</sub>
                                        </div>
                                        <span className="dropdown">	&#9662;</span>
                                   </div>
                              </div>
                         </div>

                         {/*       NAVBAR          */}
                         <div className="navbar" ref={navbar}>
                              <ul className="nav-links">
                                   <NavLink to='/dashboard'><li>Dashboard</li></NavLink>
                                   <NavLink to='/training'><li>Training</li></NavLink>
                                   <li>Settings</li>
                              </ul>
                         </div>
                         <div className="content" ref={content}></div>
                    </div>
               </div>
          </div>
     )
}

export default Header;