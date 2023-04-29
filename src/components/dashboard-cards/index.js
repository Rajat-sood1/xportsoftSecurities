import React from "react";
import { NavLink } from "react-router-dom";


const Cards = ({duration, progress, status})=>{
     return (
          <NavLink to='/module/progress'>

               <div className="card">
                    <div className="comp-title">
                         <h2>My Courses</h2>
                    </div>
                    <div className="card-content">
                         <div className="d-flex">
                              <h4>GoodLife Security Course</h4>
                              <div className="status">
                                   <p>Duration: {duration}</p>
                                   <p>Progress: {progress}</p>
                                   <p>Status: {status}</p>
                              </div>
                         </div>
                    </div>
                    <div className="card-footer">
                         <p>You will get your TCN and licence once you complete the course.</p>
                    </div>
               </div>

          </NavLink>
     )
}

export default Cards;