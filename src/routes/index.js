import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const SignInUp = lazy(() =>import('../pages/SignInUp'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Progress =  import('../pages/progress');
const Module = import('../pages/Module');
const Quiz =  import('../pages/Quiz');

const Routes = () =>{
     const routes = useRoutes([
     {
      path: '/',
      element: <SignInUp />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/module/progress',
      element: <Progress />
    },
    {
         path: '/:module/:id',
         element:<Module />,
         children:[
          {
            path:'quiz',
            element: <Quiz />
          }
         ]
    },
]);
return routes
} 

export default Routes;