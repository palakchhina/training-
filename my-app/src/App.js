import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link} from "react-router-dom";
import React from 'react';
import {ReactBrowser,Route,Routes} from "react-router-dom";
import Assignmentfirst from './Assignmentfirst';
import Assignment2 from './Assignment2';
import Assignment3 from './Assignment3';
import Home from "./Home";
 
const App=()=> {
  
  return (
  <BrowserRouter>
    
   < Home />
    <Routes>
      <Route path='/Assignmentfirst'element={<Assignmentfirst/>}/>
      <Route path='/Assignment2'element={<Assignment2/>}/>
      <Route path='/Assignment3'element={<Assignment3/>}/>
    </Routes>
  </BrowserRouter>
  
  )
};


export default App;
