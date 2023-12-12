import { Component } from 'react';
import './App.css';
import Header from '../Layout/header';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Home from '../Home/home';



class App extends Component{

render(){
  return(
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    
  )}

}

export default App;
