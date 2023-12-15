import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Home from '../Home/home';
import PageNotFound from '../PageNotFound/pageNotFound';
import Layout from '../Layout/layout';
import Contact from '../Contact/contact';
import Menu from '../Menu/menu';
import Policy from '../Policy/policy';


function App(){

  return(
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/menu' element={<Menu/>}/> 
          <Route path='/policy' element={<Policy/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
    
  )
}
export default App;
