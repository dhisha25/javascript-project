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
import Useeffect from './project/useeffect';
import Rectangle from './project/barchart';
import Local from './project/storage';
import Student from './project/sms';
import Student1 from './project/sms2';
import Student2 from './project/sms3';
import Student3 from './project/sms4';
import Student4 from './project/sms5';
import Student5 from './project/sms6';
import Student6 from './project/sms7';
import Student7 from './project/sms8';
import Student8 from './project/sms9';
import MyComponent from './project/log';

import Application from './project/table';

function App (){
  return (
<div className='App'>
   <Routes>
   <Route exact path='/grid1' element={<Grid/>}/>
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
   <Route exact path='/useeffect' element={<Useeffect/>}/>
   <Route exact path='/rect' element={<Rectangle/>}/>
   <Route exact path='/local' element={<Local/>}/>
   <Route exact path='/sms' element={<Student/>}/>
   <Route exact path='/sms2' element={<Student1/>}/>
   <Route exact path='/sms3' element={<Student2/>}/>
   <Route exact path='/sms4' element={<Student3/>}/>
   <Route exact path='/sms5' element={<Student4/>}/>
   <Route exact path='/sms6' element={<Student5/>}/>
   <Route exact path='/sms7' element={<Student6/>}/>
   <Route exact path='/sms8' element={<Student7/>}/>
   <Route exact path='/sms9' element={<Student8/>}/>
   <Route exact path='/log' element={<MyComponent/>}/>
   <Route exact path='/table' element={<Application/>}/>
   
   
   
   









  </Routes> 
    </div>
  );
}
export default App;
