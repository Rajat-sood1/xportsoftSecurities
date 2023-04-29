import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const SignInUp = lazy(() =>import('../pages/SignInUp'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Progress = lazy(() => import('../pages/progress/index'));
const Module = lazy(() => import('../pages/Module'));
const Quiz = lazy(() => import('../pages/Quiz'));

const Routes = () =>{
     const routes = useRoutes([
     {
      path: '/',
      element: <SignInUp />,
    },
    {
      path: '/dashboard',
      element: (<div className='component'><Dashboard /></div>),
    },
    {
      path: '/module/progress',
      element: (<div className='component'><Progress /></div>),
    },
    {
         path: '/:module/:id',
         element: (<div className='component'><Module /></div>),
    },
    {
      path: '/quiz',
      element: (<div className='component'><Quiz /></div>),
    },
]);
return routes
} 

export default Routes;