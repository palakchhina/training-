import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";
import React from 'react';
import {Route,Routes} from "react-router-dom";
import Assignmentfirst from './Assignmentfirst';
import Assignment2 from './Assignment2';
import Home from "./Home";
 
const App=()=> {
  
  return (
  <div>
    
   < Home />
    <Routes>
      <Route path='/'element={<Assignmentfirst/>}/>
      <Route path='/Assignment2'element={<Assignment2/>}/>
    </Routes>
  </div>
  /*<>
        <a href="/">Assignmentfirst</a>
        <a href="/Assignment2">Assignement2</a>
        </>*/
  )
};


export default App;
