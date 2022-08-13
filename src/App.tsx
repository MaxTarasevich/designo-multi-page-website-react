import React from 'react';

import './App.scss';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import AppDesign from './pages/AppDesign';
import Contact from './pages/Contact';
import GraphicDesign from './pages/GraphicDesign';
import WebDesign from './pages/WebDesign';
import Locations from './pages/Locations';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/about' element={<About />} />
     <Route path='/app-design' element={<AppDesign />} />
     <Route path='/contact' element={<Contact />} />
     <Route path='/graphic-design' element={<GraphicDesign />} />
     <Route path='/location' element={<Locations />} />
     <Route path='/web-design' element={<WebDesign />} />
       
    </Routes>
  </BrowserRouter>
  );
}

export default App;
