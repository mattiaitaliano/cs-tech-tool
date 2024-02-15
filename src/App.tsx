import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';


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
import Switch from './utilities/Switch';

const App = (): React.JSX.Element => {

  

  const location = useLocation();

  
  const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
  
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
    { path: "/links", element: <Links isChecked={isChecked}/> },
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
      {location.pathname === '/links' && (
        <div className="toggleSwitch">
          <Switch isChecked={isChecked} handleToggle={handleToggle} />
        </div>
      )}
      </>
  );
}

export default App;
