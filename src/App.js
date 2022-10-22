import React from "react";
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import the pages
import { Home } from './pages/Home/Home'
import { About } from "./pages/About us/About";
import { Blog } from "./pages/Blog";
import { Donation } from "./pages/Donation";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import ErrorPage from "./pages/Others/errorPage";
import Navbar from "./components/Navbar/Navbar";
import { Register } from "./pages/User Pages/register";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/donate' element={<Donation/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/contact' element={<Contact/>} />

          {/*Registeration Pages */}
          <Route path='/signup' element={<Register/>} />

          {/*Others */}
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
