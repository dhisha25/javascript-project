import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Project from './project/project';
import Vaishal from './project/dhisha';
import Dhisha from './project/vaishal';
import Grid from './project/grid';
import Props from './project/props';
import Test from './project/inheritance';
import Condition from './project/login';
import Index from './project/condition';
import Hook from './project/hooks';
import Component1 from './project/props1';
import Condition11 from './project/props1';
import GraphWithCircles from './project/circle';
import BarChart from './project/rectangle';
function App (){
  return (
<div className='App'>
   <Routes>
   <Route exact path="/" element={<Grid/>}/>
   <Route exact path='/project' element={<Project/>}/>
   <Route exact path='/grid' element={<Vaishal/>}/>
   <Route exact path='/props' element={<Props/>}/>
   <Route exact path='/test' element={<Test/>}/>
   <Route exact path='/login' element={<Condition/>}/>
   <Route exact path='/condition' element={<Index/>}/>
   <Route exact path='/vaishal' element={<Dhisha/>}/>
   <Route exact path='/hook' element={<Hook/>}/>
   <Route exact path='/component' element={<Condition11/>}/>
   <Route exact path='/graph' element={<GraphWithCircles/>}/>
   <Route exact path='/barchart' element={<BarChart/>}/>







  </Routes> 
    </div>
  );
}
export default App;
