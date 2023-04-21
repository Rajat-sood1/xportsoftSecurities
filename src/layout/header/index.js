import React from "react";
import Users from "../../utils/users/index"

const Header = ({position}) => {

     const users = Users;
     console.log(users)
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
                                             <p>{users?.Name ? "Rajat" : "John"}</p>
                                             <sub>student</sub>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/*       NAVBAR          */}
                         <div className="navbar" id={position}>
                              <ul className="nav-links">
                                   <li>Training</li>
                                   <li>Setting</li>
                              </ul>
                         </div>
                         <div className="content" id="content"></div>
                    </div>
               </div>
          </div>
     )
}

export default Header;