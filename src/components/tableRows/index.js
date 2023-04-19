import React from 'react';

const TableRow = ({id, title, duration, progress}) =>{
     return (
          <>
              <tr>
                    <td>
                         {"Section " + id}
                    </td>
                    <td>
                         {title}
                    </td>
                    <td>
                         {duration}
                    </td>
                    <td>
                         {progress}
                    </td>
              </tr>
          </>
     )
}

export default TableRow;