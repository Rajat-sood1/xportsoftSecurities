import React, { useContext } from "react";
import TableRow from "../../components/tableRows";
import Header from "../../layout/header";
import { Context } from "../../middleware/auth";


const Progress = () => {
     const formatDuration = (duration) => {
          const hours = Math.floor(duration / 3600);
          const minutes = Math.floor((duration % 3600) / 60);
          const seconds = duration % 60;
          return( `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`)
        };
        
        const Modules = useContext(Context);
        console.log(Modules);

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
                                        Modules.map(({ id, duration, title, progress }) => {
                                             return (
                                                  <TableRow key={id} id={id} duration={formatDuration(duration)} title={title} progress={progress} />

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