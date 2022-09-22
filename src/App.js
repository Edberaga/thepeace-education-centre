import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import the pages
import { Home } from './pages/Home'
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Donation } from "./pages/Donation";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import ErrorPage from "./pages/Others/errorPage";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/donation" element={<Donation/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
