import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../middleware/auth';


const TableRow = ({ id, title, duration, progress }) => {

     const { loggedInUser } = useContext(Context);

     let hours = Math.floor(duration / 3600);
     let minutes = Math.floor((duration % 3600) / 60);
     let seconds = Math.floor(duration % 60);
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
                         {hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + ": " + seconds.toString().padStart(2, '0')}
                    </td>
                    <td className="w-8 border">
                         {progress}
                    </td>
                    <td className="w-8 border">
                    {loggedInUser.sub[id-1].isCompleted ?  <span className='sts'>&#10003;</span> : <span className='sts-r'>&#128473;</span>}
                    </td>


                    <td className="w-8 border sts">
                    {loggedInUser.sub[id-1].isCompleted  ?  <span className='sts'>&#10003;</span> : <span className='sts-r'> &#128473;</span>}
                    </td>

                    <td className="w-25 border" >
                         <NavLink to={`/module/${id}`}> <button className={loggedInUser.sub[id-1].isCompleted ? 'btn' : 'btn restricted'}>Review</button></NavLink>
                    </td>
               </tr>
          </>
     )
}

export default TableRow;