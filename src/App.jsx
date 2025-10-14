import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import './App.css'

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experiment from './components/Experiment';

function App() {


  return (
    <>
      <Header />
      <About />
      <Experiment />
    </>
  )
}

export default App
