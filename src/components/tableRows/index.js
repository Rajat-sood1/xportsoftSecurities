import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../middleware/auth';
import { Duration, Progress } from '../../utils/TimeFormat/TimeFormat';


const TableRow = ({ id, title }) => {
     const { loggedInUser, openModule, toaster } = useContext(Context);
     const i = id - 1;
     const progress = Progress(i);
     const duration = Duration(i);
     return (
          <>
               <tr key={id}>
                    <td className="w-8 border">
                         {"Section " + id}
                    </td>
                    <td className="w-40 border">
                         <h3 className='t-title'>
                              {title}
                         </h3>
                    </td>
                    <td className="w-8 border">
                         {duration[0] + ":" + duration[1] + ":" + duration[2]}
                    </td>
                    <td className="w-8 border">
                         {progress[0] + ":" + progress[1] + ":" + progress[2]}
                    </td>
                    <td className="w-8 border">
                         <span className={loggedInUser.sub[id - 1].isCompleted ? 'sts' : 'sts-r'}></span>
                    </td>
                    <td className="w-8 border">
                         <span className={loggedInUser.sub[id - 1].Marks >= 2 ? 'sts' : 'sts-r'}></span>
                    </td>

                    <td className="w-25 border" >
                         {
                              id === 1 || loggedInUser.sub[id - 2].isCompleted
                                   ?
                                   id === 1 || loggedInUser.sub[id - 2].Marks >= 2
                                        ? !(loggedInUser.sub.find((el) => el.isActive)?.isActive)
                                             ?
                                             <NavLink to={`${id}`} > <button onClick={() => openModule(id - 1)} className='btn' >Review</button></NavLink>
                                             :
                                             <button className='btn restricted' onClick={() => toaster(true, 'Another module is Active Currently!')}>Review</button>
                                        :
                                        <button className='btn restricted' onClick={() => toaster(true, ('Please pass Quiz for Section...' + i + ' 50% Marks are necessary!'))}  >Review</button>
                                   :

                                   <button className='btn restricted' onClick={() => toaster(true, ('Section ' + (id - 1) + ' is not completed yet!'))}  >Review</button>
                         }
                    </td>
               </tr>
          </>
     )
}
export default TableRow;
