import React, { ReactElement, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

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
    { path: "/utility", element: <Utility /> },
    { path: "/links", element: <Links /> },
    { path: "*", element: <NotFound /> }
  ];


  return (
    <>
    { isLoggedIn ? (
      <>
      <Overlay isOpen={isOverlayOpen} onClose={toggleOverlay}>
        <Info />
      </Overlay>

      <div className='headComp'>
        <Header onOpenOverlay={toggleOverlay} />
      </div>
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
