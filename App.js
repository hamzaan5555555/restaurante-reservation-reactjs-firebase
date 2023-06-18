
import './App.css';
import { auth } from "./firebase";

import BasicExample from './components/Navbar';
import Home from './components/home';
import { Route , Routes } from 'react-router-dom';
import Review from './components/review';
import Food from './components/food';
import About from './components/about';
import Page from './components/page';
import Login from './LoginSingUp/Login/Login';
import Signup from './LoginSingUp/Signup/Signup';
import Contact from './contact/contact';

import Headeer from './headeer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <BasicExample/>
     <Routes>
     <Route path='/' element={<Headeer/>}></Route>
        <Route path='/home' element={<Headeer/>}></Route>
        <Route path='/food' element={<Food/>}></Route>
        <Route path='/review' element={<Review/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>


        
        
      </Routes>
      <Footer/>
      
      
      

    </div>
  );
}

export default App;
