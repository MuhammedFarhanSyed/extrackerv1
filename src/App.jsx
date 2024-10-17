import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Router components


import Navbar from './components/Navbar';
import Main_sec from './components/Main_sec';

import Landing_page from './components/Landing_page';

import Subscribtion from './components/Subscribtion';
import './App.css'
function App() {
  return (<>
  {/* <Navbar></Navbar>
  
  <Main_sec/> */}
  <Landing_page />
  <Subscribtion></Subscribtion>
    </>
  );
}

export default App;
