import React from 'react';
import { useContext } from 'react';
import { Context } from '../../middleware/auth';


const TableRow = ({id, title, duration, progress}) =>{
     const {loggedInUser, openModule} = useContext(Context);


     let module = title;
     let hours = Math.floor(duration/3600);
     let minutes = Math.floor((duration %3600)/60);
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
                         { hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + ": " + seconds.toString().padStart(2, '0') }
                    </td>
                    <td className="w-8 border">
                         {progress}
                    </td>
                   {loggedInUser.isCompleted? <td className="w-8 border sts"> &#10003;</td>: <td className="w-8 border sts-r"> &#128473;</td>}
                    
                    
                    
                    {loggedInUser.isCompleted?<td className="w-8 border sts"> &#10003;</td>:<td className="w-8 border sts-r"> &#128473;</td>}
                    
                    <td className="w-25 border" >
                    <button className={loggedInUser.isCompleted?'btn':'btn restricted'} onClick={openModule(id)}>Review</button>
                    </td>
              </tr>
          </>
     )
}

export default TableRow;