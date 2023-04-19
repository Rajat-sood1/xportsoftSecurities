import React from "react";
import TableRow from "../../components/tableRows";
import modules from '../../utils/modules/index'

const Progress = () => {

     const moduleList = modules;
     console.log(moduleList)


     return (
          <table>
               <thead>
                    <tr>
                         <td>Sections</td>
                         <td>Modules</td>
                         <td>Duration</td>
                         <td>Progress</td>

                    </tr>
               </thead>
               <tbody>
                    {moduleList.map(({ id, duration, title, progress })=>{
                         return(
                              <TableRow id={id} duration={duration} title={title} progress={progress} />

                         )
                    })}

               </tbody>

          </table>
     )
}

export default Progress;