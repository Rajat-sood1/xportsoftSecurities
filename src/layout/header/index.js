import React from "react";
import Users from "../../utils/users/index"
import { NavLink } from "react-router-dom";

const Header = () => {

     const users = Users;
     window.onscroll = ()=>{
          var navbar = document.getElementById("position");
          var content = document.getElementById("content");
          var sticky = content.offsetTop; 
          if(content){

               if (window.pageYOffset >= sticky) {
                   navbar.classList.add("sticky")
              } else {
                   navbar.classList.remove("sticky");
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
                                             <p>{users?.Name ? "Rajat" : "John Doe"}</p>
                                             <sub>student</sub>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/*       NAVBAR          */}
                         <div className="navbar" id={'position'}>
                              <ul className="nav-links">
                              <NavLink to='/dashboard'><li>Dashboard</li></NavLink>
                                   <NavLink to='/training'><li>Training</li></NavLink>
                                   <li>Settings</li>
                              </ul>
                         </div>
                         <div className="content" id="content"></div>
                    </div>
               </div>
          </div>
     )
}

export default Header;