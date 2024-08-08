import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BaseLayout from './layouts/baseLayout';
import AboutMe from './components/Aboutme';
import Project from './components/Project';
import Contact from './components/Contact';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BaseLayout />}>
           <Route index element={<AboutMe />} />
           <Route path='/my-work' element={<Project/>}/>
           <Route path='/contact-me' element={<Contact/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
