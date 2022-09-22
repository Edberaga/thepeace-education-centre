import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
//import the pages
import { Home } from './pages/Home/Home'
import { About } from "./pages/About/About";
import { Blog } from "./pages/Blog/Blog";
import { Donations } from "./pages/Donation/Donation";
import { Gallery } from "./pages/Gallery/Gallery";
import { Contact } from "./pages/Contact/Contact";


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
