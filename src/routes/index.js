import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Loading from '../components/Loading';

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

const Routes = () =>{
     const routes = useRoutes([
     {
      path: '/',
      element: (<Suspense fallback={<Loading />}><div className="body"><SignInUp/></div></Suspense>)
    },
    {
      path: '/dashboard',
      element: (<Suspense fallback={<Loading />}><div className="component"><Dashboard /></div></Suspense>)
    },
    {
      path: '/modules',
      element: (<Suspense fallback={<Loading />}><div className="component"><Modules /></div></Suspense>)
    },
    {
         path: '/module/:id',
         element:(<Suspense fallback={<Loading />}><div className="component"><Module /></div></Suspense>),
         children:[
          {
            path:'quiz',
            element: (<Suspense fallback={<Loading />}><Quiz /></Suspense>)
          }
         ]
    },
]);
return routes
} 

export default Routes;