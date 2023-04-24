import React from "react";
import TableRow from "../../components/tableRows";
import modules from '../../utils/modules/index';
import Header from "../../layout/header";


const Progress = () => {

     const moduleList = modules;

     return (
          <>
               <Header/>
               <div className="comp-container">
                    <div className="comp-title">
                         <h1>Training</h1>
                    </div>
                    <section className="module-sec">
                         <div className="comp-title">
                              <h3>Welcome To The Security Guard Course</h3>
                         </div>
                         <table>

                              <thead>
                                   <tr className="t-head">
                                        <th className="w-8 border">Sections</th>
                                        <th className="w-40 border">Modules</th>
                                        <th className="w-8 border">Duration</th>
                                        <th className="w-8 border">Progress</th>
                                        <th className="w-8 border">Interaction</th>
                                        <th className="w-8 border">Quiz</th>
                                        <th className="w-25 border"></th>

                                   </tr>
                              </thead>

                              <tbody>
                                   {
                                        moduleList.map(({ id, duration, title, progress }) => {
                                             return (
                                                  <TableRow key={id} id={id} duration={duration} title={title} progress={progress} />

                                             )
                                        })
                                   }
                              </tbody>

                         </table>
                    </section>
               </div>

          </>
     )
}

export default Progress;