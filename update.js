import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Student from './project/new1';
import nature from "../src/images/nature.jpg";
import dog from "../src/images/dog.jpg";
import dog1 from "../src/images/dog1.jpg";
import { Row, Col, Card, Container } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { AiFillSetting } from "react-icons/ai";
import { Icon } from '@iconify/react';
function App (){
  return (
<div className='app-main'>
  {/* <Routes>
   <Route exact path="/" element={<Student/>}></Route>
  </Routes> */}
     <h1 className='name1' >Dhisha</h1>
     <img className="nature" src={nature}></img>
     <img className="dog" src={dog}></img>
    <picture> <img className="dog1" src={dog1}></img>
    </picture>

    <h2 className='name2'>my address:no 39/c, thoppu street, mosur, arakkonam</h2>

     <h3 className='name'>watching TV</h3>
     <span>hii</span>
     <br/>
     <a href='/new'>good morning</a>
    <p className='name4'>my name is dhisha,i am studied in s m s vimal matric hr.sec.school and I am living in arakkonam and my father name is s.pandian and my mother name is vijayalakshmi and my brother name is vaishal and my freinds name is deepika,induja,janani,abinaya,saro and I like t</p>
    <div >
    <Row>
      <Col className="col-4">
        <h1>hi,good morning</h1>
      </Col>
      <Col className="col-4">
        <h2>good night</h2>
      </Col>
     </Row>
     <label className='name5'>name</label>
     <input type="text" placeholder='enter name' required className='name'>
     </input>
     <div>
     <button className='submit'>
      submit
     </button>
     </div>
     <div>
     <input type="number" placeholder='mobile number' ></input>
     </div>
     <input type="text" placeholder='e mail'></input>
     <div className='row'>
      <div className='col'>
        good
      </div>
      <div className='col'>
        bad
      </div>
     </div>
     <table className='tablenew'>
      <tr>
        <th>name</th>
        <th>age</th>
      </tr>
      <tr>
      <td>dhisha</td>

      <td>17</td>
      </tr>
     </table>
     <ul>
      <li>home</li>
      <li>about</li>
      <li>age</li>
      
     </ul>
     <div>
      <table className='tablenew1'>
        <tr>
          <th>subject</th>
          <td>tamil</td>
          <td>english</td>
          <td>maths</td>
          <td>bes</td>
          <td>chemistry</td>
          <td>physics</td>
          <td>c programming</td>
        
          
    
          
          

          
        </tr>

      </table>
      <ul>
        <li>physics marks=56</li>
        <li>chemistry mark=70</li>
        <li>english mark=78</li>
      </ul>
      <section>

        dhisha
      </section>
      <div className='card'> <img className="dog" src={dog}></img>
      <div className='container'><h1 className='new1'>hello</h1><p className='new2'>have a nice day</p></div>
      </div>
      <div>
        <h2 id='pro1'>hi good evening</h2>
      </div>
      <section id='sec1'><div id="row">
        <div className='col'>
          <h3 id="hello">hello</h3>
        </div>
        <div className='col'><h3>good</h3></div>
        <div className='col'><h3>bad</h3></div>
        <div className='col'><img id="newdog" src={dog}></img></div>
        <div className='foot'><a href="https://www.instagram.com/travailtechnologies/" target='_blank'><i id="social" class="fa fa-instagram fa-2x social"></i></a></div>
        </div></section>
        <section id='sec2'>
          <div id='row2'>
            <div className='col'><h4>good morning</h4></div>

          </div>
        </section>
        <label><input type="checkbox"  /> apple</label>
        <label><input type="radio"  defaultChecked={false} /> orange</label>
        <label><input type="radio"  /> banana</label>
        <br></br>
        <br></br>
        <label>Choose a car:</label>
        

<select name="cars" id="cars">
  <option>Volvo</option>

  <option >Mercedes</option>
  <option >Audi</option>
  </select>
  <br></br>
  <br></br>
  <label><input type="radio"  /> male</label>
        <label><input type="radio"   /> female</label>
        <label><input type="radio"  /> others</label>
        <label><input type="checkbox"  /> name</label>
        <label><input type="checkbox"  /> mobilenumber</label>
        <br></br>
        <br></br>
        <label>Choose a subject:</label>
        <select name="subject" id="subject">
  <option>tamil</option>
  <option >english</option>
  <option >chemistry</option>
  <option>maths</option>
  <option >physics</option>
  <option >c language</option>

</select>
      
     <i class="fas fa-clock" style={{color:"red"}}></i>
     <AiFillSetting
              style={{ color: "black",  }}
            ></AiFillSetting>
            <Icon icon="skill-icons:instagram" />
            <input
                  type="file"
                  id="file"
                  required
              
                
                  
                  accept=".xlsx"
                />
                <br></br>
                <br></br>
                <div>
                  <Icon icon="logos:whatsapp-icon" />
                  <Icon icon="devicon:facebook" />
                  <Icon icon="skill-icons:twitter" />
                  <Icon icon="fa6-brands:square-threads" color="green" />
                </div>
                <br></br>
                
     </div>
    </div>
    </div>
  );
}

export default App;
