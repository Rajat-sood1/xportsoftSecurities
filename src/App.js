import React from 'react';
import SignInUp from './pages/SignInUp/index';
import Progress from './pages/progress/index'

import './assets/styles/index.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Module from './pages/Module';
import Dashboard from './pages/Dashboard';
import Auth from './middleware/auth';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Auth>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<div className='body'><SignInUp/></div>}/>
          <Route path='/dashboard' fal element={<div className='component'><Dashboard/></div>}/>
          <Route path='/Training' element={<div className='component'><Progress/></div>}/>
          <Route path='/module/:id' element={<div className='component'><Module/></div>}/>
          <Route path='/quiz' element={<div className='component'><Quiz/></div>}/>
        </Routes>
        
      </BrowserRouter>
    </Auth>
  );
}

export default App;
