import { Suspense } from "react";
import Routes from './routes';
import './assets/styles/index.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Module from './pages/Module';
import Dashboard from './pages/Dashboard';
import Auth from './middleware/auth';
import Quiz from './pages/Quiz/index2';
import { useMatch } from "react-router-dom";
import Auth from "./middleware/auth";

function App() {
  const routes = Routes();
  console.log(routes)
  const match = useMatch({path:'/'});
  console.log(match);
  return (
    <Auth>

    <Suspense fallback={<div className='body'>Please wait while Page is loading...</div>}>
      {match?.pathname === '/'? <div className="body">{routes}</div>:<div className="component">{routes}</div>}
    </Suspense>
    </Auth>
  );
}

export default App;