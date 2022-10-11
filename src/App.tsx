import React from 'react';

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
     <Route path='/designo-multi-page-website-react' element={<Home />} />
     <Route path='/designo-multi-page-website-react/about' element={<About />} />
     <Route path='/designo-multi-page-website-react/app-design' element={<AppDesign />} />
     <Route path='/designo-multi-page-website-react/contact' element={<Contact />} />
     <Route path='/designo-multi-page-website-react/graphic-design' element={<GraphicDesign />} />
     <Route path='/designo-multi-page-website-react/location' element={<Locations />} />
     <Route path='/designo-multi-page-website-react/web-design' element={<WebDesign />} />
       
    </Routes>
  </BrowserRouter>
  );
}

export default App;
