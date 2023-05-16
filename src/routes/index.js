import { Suspense, lazy, useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import Loading from '../utils/Loading';


//   CONFIGURE LAZY LOAD TO OPTIMIZE INITIAL LOAD TIME
const SignInUp = lazy(() => import('../pages/SignInUp'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Modules = lazy(() => import('../pages/modules'));
const Module = lazy(() => import('../pages/Module'));
const QuizView = lazy(() => import('../pages/Quiz'));



function LazyLoadComponent({ loadingComponent, element }) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate a delay to show the loading component
  useEffect(() => {
    console.log('useEffect called');
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
      console.log('useEffect called after 2000');

    }, 2000);


  }, [])

  return (
    <Suspense fallback={loadingComponent}>
      {isLoaded ? element : loadingComponent}
    </Suspense>
  );
}

//  CUSTOM ROUTES USING USEROUTES HOOK
const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: (<LazyLoadComponent loadingComponent={<Loading />} element={<div className="body"><SignInUp /></div>} />)
    },
    {
      path: '/dashboard',
      element: (<LazyLoadComponent loadingComponent={<Loading />} element={<div className="component"><Dashboard /></div>} />)
    },
    {
      path: '/modules',
      element: (<LazyLoadComponent loadingComponent={<Loading />} element={<div className="component"><Modules /></div>} />)
    },
    {
      path: '/modules/:id',
      element: (<LazyLoadComponent loadingComponent={<Loading />} element={<div className="component"><Module /></div>} />),
      children: [
        {
          path: 'quiz',
          element: (<QuizView />)
        }
      ]
    }
  ]);
  return routes
}

export default Routes;