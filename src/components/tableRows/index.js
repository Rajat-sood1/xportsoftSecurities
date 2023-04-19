import React from 'react';

const TableRow = (props) =>{
     return (
          <>
              <tr>
                    <td>
                         {props.title}
                    </td>
              </tr>
          </>
     )
}

export default TableRow;