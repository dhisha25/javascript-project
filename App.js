import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Project from './project/project';
import Vaishal from './project/dhisha';
import Dhisha from './project/vaishal';
import Grid from './project/grid';
function App (){
  return (
<div className='App'>
   <Routes>
   <Route exact path="/" element={<Grid/>}/>
   <Route exact path='/project' element={<Project/>}/>
  </Routes> 
    </div>
  );
}
export default App;
