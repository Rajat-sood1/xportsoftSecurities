import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

const SignInUp = lazy(() =>import('../pages/SignInUp'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Progress = lazy(() => import('../pages/progress'));
const Module = lazy(() => import('../pages/Module'));
const Quiz = lazy(() => import('../pages/Quiz'));

const Routes = () =>{
     const routes = useRoutes([
     {
      path: '/',
      element: (<Suspense fallback={<div>Loading...</div>}><SignInUp /></Suspense>),
    },
    {
      path: '/dashboard',
      element: (<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>),
    },
    {
      path: '/modules',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Progress />
        </Suspense>
      )
    },
    {
         path: '/:module/:id',
         element:(<Suspense fallback={<div>Loading...</div>}><Module /></Suspense>),
         children:[
          {
            path:'quiz',
            element: (<Suspense fallback={<div>Loading...</div>}><Quiz /></Suspense>)
          }
         ]
    },
]);
return routes
} 

export default Routes;