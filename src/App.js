import React from 'react';
import SignInUp from './pages/SignInUp/index';
import Progress from './pages/progress/index'

import './assets/styles/index.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Module from './pages/Module';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<div className='body'><SignInUp/></div>}/>
          <Route path='/dashboard' element={<div className='component'><Progress/></div>}/>
          <Route path='/Module' element={<div className='component'><Module/></div>}/>
          
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
