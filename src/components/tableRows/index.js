import React from 'react';
import { NavLink } from 'react-router-dom';

const TableRow = ({id, title, duration, progress}) =>{
     return (
          <>
              <tr>
                    <td className="w-8 border">
                         {"Section " + id}
                    </td>
                    <td className="w-40 border">
                         {title}
                    </td>
                    <td className="w-8 border">
                         {duration}
                    </td>
                    <td className="w-8 border">
                         {progress}
                    </td>
                    <td className="w-8 border">
                         Done
                    </td>
                    <td className="w-8 border">
                         Done
                    </td>
                    <td className="w-25 border" >
                         <button className='btn'><NavLink to='/Module'>Review</NavLink></button>
                    </td>
              </tr>
          </>
     )
}

export default TableRow;