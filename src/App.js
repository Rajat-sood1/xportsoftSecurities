
import {Routes} from './routes';
import './assets/styles/index.css'
import Auth from "./middleware/auth";

function App() {
  const routes = Routes();
  return (
    <Auth>
      {routes}
    </Auth>
  );
}

export default App;