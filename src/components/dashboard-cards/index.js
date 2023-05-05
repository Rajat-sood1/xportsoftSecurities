import React from "react";
import { NavLink } from "react-router-dom";
import { TotalDuration, TotalProgress } from "../../utils/TimeFormat/TimeFormat";


const Cards = () => {

     const duration = TotalDuration();
     const progress = TotalProgress();

     return (
          <div className="card">
               <NavLink to='/modules'>
                    <div className="comp-title">
                         <h2>My Courses</h2>
                    </div>
                    <div className="card-content">
                         <div className="d-flex">
                              <h4>GoodLife Security Course</h4>
                              <div className="status">
                                   <p>Duration:<span> {duration[0] + ":" + duration[1] + ":" + duration[2]}</span></p>
                                   <p>Progress:<span> {progress[0] + ":" + progress[1] + ":" + progress[2]}</span></p>
                                   <p>Status:<span> {(duration[0] === progress[0]) && (duration[1] === progress[1]) ? 'Training Completed' : (progress[0] === '00' && progress[2] === '00') ? 'Not Started' : 'Pending'}</span></p>
                              </div>
                         </div>
                    </div>
                    <div className="card-footer">
                         <p>You will get your TCN and licence once you complete the course.</p>
                    </div>
               </NavLink>
          </div>


     )
}

export default Cards;