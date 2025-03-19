import React from 'react'
import Navbar from './components/common/Navbar'

import Home from './components/home/Home';
import Design from './components/design/Design';
import TakeAnOath from './components/oath/TakeAnOath';
import Resources from './components/resource/Resources';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/common/Footer';
import Quiz from './components/design/Quiz';
import RotatingClock from './components/design/RotatingClock';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/capstone" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/design/option1" element={<Quiz />} />
        <Route path="/design/option2" element={<RotatingClock />} />
        <Route path="/take-an-oath" element={<TakeAnOath />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App