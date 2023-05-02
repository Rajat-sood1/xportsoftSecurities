import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const lazyRetry = function(componentImport) {
  return new Promise((resolve, reject) => {
      // try to import the component
      componentImport().then((component) => {
          resolve(component);
      }).catch((error) => {
          // TO DO
          console.log("lazy retry",error);
          reject(error); // there was an error
      });
  });
};


const SignInUp = lazy(() =>import('../pages/SignInUp'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Modules =  lazy(() =>import('../pages/modules'));
const Module = lazy(() =>lazyRetry(()=>import('../pages/Module')));
const Quiz =  lazy(() =>import('../pages/Quiz'));

export const Routes = () =>{
     const routes = useRoutes([
     {
      path: '/',
      element: <SignInUp />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/modules',
      element: <Modules />
    },
    {
         path: '/module/:id',
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
