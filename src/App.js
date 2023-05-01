import { Suspense } from "react";
import Routes from './routes';
import './assets/styles/index.css'
import { useMatch } from "react-router-dom";
import Auth from "./middleware/auth";


function App() {
  const routes = Routes();
  const match = useMatch({ path: '/' });
  return (
    <Auth>
      <Suspense fallback={<div className='body'>Please wait while Page is loading...</div>}>
        {match ? <div className="body">{routes}</div> : <div className="component">{routes}</div>}
      </Suspense>
    </Auth>
  );
}

export default App;