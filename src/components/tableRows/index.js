import React from 'react';
import { NavLink } from 'react-router-dom';


const TableRow = ({id, title, duration, progress}) =>{

     const calculate  = async () =>{
          let hours= await Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = 40;
          let seconds = 23;
          console.log(hours, minutes, seconds)
          return [hours + ':' + minutes + ':' + seconds]
     }
     return (
          <>
              <tr>
                    <td className="w-8 border">
                         {"Section " + id}
                    </td>
                    <td className="w-40 border">
                         <h3 className='t-title'>
                              {title}
                         </h3>
                    </td>
                    <td className="w-8 border">
                         {calculate}
                    </td>
                    <td className="w-8 border">
                         {progress}
                    </td>
                    <td className="w-8 border sts">
                    &#10003;
                    </td>
                    <td className="w-8 border sts-r">
                    &#128473;
                    </td>
                    <td className="w-25 border" >
                    <NavLink to={'/module/'+id}> <button className='btn'>Review</button></NavLink>
                    </td>
              </tr>
          </>
     )
}

export default TableRow;