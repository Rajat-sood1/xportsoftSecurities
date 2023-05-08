import React, { useContext, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../middleware/auth";

const Header = () => {
     let { loggedInUser, setLoggedInUser } = useContext(Context);
     const element = useRef();

     const [drop, setDrop] = useState(false);

     if (drop) {


     }

     window.onscroll = () => {
          if (element.second !== null) {
               setDrop(false);
               let sticky = element.second?.offsetTop;
               element.drop.classList.add('none');

               if (window.pageYOffset >= sticky) {
                    element.first.classList.add("sticky")
               } else {
                    element.first.classList.remove("sticky");
               }
          }
     }

     if (drop) {

          document.addEventListener('click', (e) => {
               console.log('document.clicked');

               if (element.drop) {
                    if (drop === true && !element.drop.contains(e.target) && !element.user.contains(e.target)) {

                         element.drop.style.display = 'none';
                         element.arrow.classList.remove('rotate');
                         console.log('document.clicked inside');

                         setDrop(false);

                    }

               }
          })

     }

     const dropdown = () => {
          if (drop) {

               element.drop.style.display = 'none';
               element.arrow.classList.remove('rotate');
          }
          else {
               element.drop.style.display = 'block';
               element.arrow.classList.add('rotate');
          }
          setDrop(!drop);
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
                                        <div className="user-details d-flex " onClick={() => { dropdown(); }} ref={(el) => (element.user = el)} >
                                             <div>
                                                  <p>{loggedInUser.Name}</p>
                                                  <sub>student</sub>
                                             </div>
                                             <span className="after" ref={(el) => (element.arrow = el)}>&#9662;</span>
                                        </div>
                                        <div className="drop" ref={(el) => (element.drop = el)}>
                                             <ul>
                                                  <li>
                                                       <button className="link"> change Password</button>
                                                  </li>
                                                  <li>
                                                       <button className="link" onClick={() => {
                                                            setLoggedInUser((e) => ({ ...e, login: false }))
                                                       }}> logOut</button>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>

                              {/*   DROPDOWN FOR LOGOUT AND CHANGE PASSWORD */}
                         </div>

                         {/*       NAVBAR          */}
                         <div className="navbar" ref={(el) => (element.first = el)}>
                              <ul className="nav-links">
                                   <NavLink to='/dashboard'><li>Dashboard</li></NavLink>
                                   <NavLink to='/modules'><li>Training</li></NavLink>
                                   <li>Settings</li>
                              </ul>
                         </div>
                         <div className="content" ref={(el) => (element.second = el)}></div>
                    </div>
               </div>
          </div>
     )
}

export default Header;