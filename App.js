import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import {Routes, Route} from 'react-router-dom';

import Project from './project/project';

function App (){
  return (
<div className='App'>
   <Routes>
   <Route exact path="/" element={<Project/>}/>
   

  </Routes> 
    
     
     
     


    </div>
  );
}

export default App;
