import logo from './logo.svg';
import React, { Component } from "react";
import {Routes, Route} from 'react-router-dom';

import './App.css';
import Resume from './javascript/new project';
import About from './javascript/about';

function App() {
  return (
    <div className='App'>
      <Routes>
      <Route exact path='/' element={<Resume/>}/>
      <Route exact path='/about' element={<About/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
