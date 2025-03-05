import React from 'react'
import Navbar from './components/common/Navbar'

import Home from './components/home/Home';
import Design from './components/design/Design';
import TakeAnOath from './components/oath/TakeAnOath';
import Resources from './components/resource/Resources';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/take-an-oath" element={<TakeAnOath />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
    
  )
}

export default App