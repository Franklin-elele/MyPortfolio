import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
// import About from './components/About'
// import Projects from './components/Projects'
// import Skills from './components/Skills'
// import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar">
          <div className="logo">
            <a to="/">MyPortfolio</a>
          </div>
          <ul className="nav-links">
             <li>
              <a  href="/" className="navlink">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="navlink">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="navlink">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="navlink">
                Contact
              </a>
            </li>
          </ul>
                  </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/contact' element={<Contact/>}/> */}
          </Routes>
      </BrowserRouter>
    </>
  );
}
