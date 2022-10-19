import './App.scss';
import { Routes, Route } from 'react-router-dom';
import React from "react";
import Home from './routes/Home'
import About from './routes/About'
import Project from './routes/Project'
import Contact from './routes/Contact'

function App() {
  return (
    <>
      <div className='dark:bg-slate-800 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>

  )
}

export default App;
