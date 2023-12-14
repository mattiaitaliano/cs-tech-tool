import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { app, window as tauriWindow } from '@tauri-apps/api';


import './App.scss';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Utility from './components/Utility';
import Links from './components/Links';
import NotFound from './utilities/NotFound';
import Overlay from './utilities/Overlay';
import Info from './components/Info';
import Login from './utilities/Login';
import CSImaging from './components/CSImaging';
import Activation from './components/Activation';

const App = (): React.JSX.Element => {
  
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  
  const toggleOverlay = () => {
      setIsOverlayOpen(!isOverlayOpen);
    };


  const views = [
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/utility/*", element: <Utility /> },
    { path: "/links", element: <Links /> },
    { path: "*", element: <NotFound /> },
    { path: "/csimaging/*", element: <CSImaging />},
    { path: "/activation/*", element: <Activation />}
  ];


  return (
    <>
    <div className='headComp'>
    <Header onOpenOverlay={toggleOverlay} />
  </div>
  <Overlay isOpen={isOverlayOpen} onClose={toggleOverlay}>
        <Info />
      </Overlay>
      
    { isLoggedIn ? (
      <>

      <div className='navbarComp'>
        <Navbar/>
      </div>
      <div className='mainComp'>
      <Routes>
        {views.map((view, index) => (
          <Route key={index} path={view.path} element={view.element} />
        ))} 
  </Routes>
      </div>
      <div className='footComp'>
        <Footer/>
      </div> 
      </>
        ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
      </>
  );
}

export default App;
