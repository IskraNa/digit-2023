import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Home from '../Home/home';
import PageNotFound from '../PageNotFound/pageNotFound';
import Layout from '../Layout/layout';


function App(){

  return(
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/menu' element={<Menu/>}/> */}
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
    
  )
}
export default App;
