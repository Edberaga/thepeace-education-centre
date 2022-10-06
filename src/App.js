import React from "react";
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import the pages
import { Home } from './pages/Home'
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Donation } from "./pages/Donation";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import ErrorPage from "./pages/Others/errorPage";
import Navbar from "./components/Navbar/Navbar";
import { Register } from "./pages/User Pages/register";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/donation' element={<Donation/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/contact' element={<Contact/>} />

          {/*Registeration Pages */}
          <Route path='/signup' element={<Register/>} />

          {/*Others */}
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
