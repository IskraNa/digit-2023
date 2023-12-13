import { Component } from 'react';
import './App.css';
import Header from '../Layout/header';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Home from '../Home/home';



function App (){

  return(
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main/>}>
        <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
    
  )
}
export default App;
