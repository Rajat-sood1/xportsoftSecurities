import { useRoutes } from 'react-router-dom';
import SignInUp from '../pages/SignInUp';
import Dashboard from '../pages/Dashboard';
import Modules from '../pages/modules';
import Module from '../pages/Module';
import QuizView from '../pages/Quiz';

const Routes = () =>{
     const routes = useRoutes([
     {
      path: '/',
      element: (<div className="body"><SignInUp/></div>)
    },
    {
      path: '/dashboard',
      element: (<div className="component"><Dashboard /></div>)
    },
    {
      path: '/modules',
      element: (<div className="component"><Modules /></div>)
    },
    {
         path: '/modules/:id',
         element:(<div className="component"><Module /></div>),
         children:[
          {
            path:'quiz',
            element: (<QuizView />)
          }
         ]
    },
]);
return routes
} 

export default Routes;