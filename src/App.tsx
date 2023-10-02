import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { MemoryRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <>
    <div className='headComp'>
      <Header/>
    </div>
    <div className='navbarComp'>
      <Navbar/>
    </div>
    <div className='mainComp'>
      <Home/>
    </div>
    </>
  );
}

export default App;
