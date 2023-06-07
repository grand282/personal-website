import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Projects from './component/Projects';
import About from './component/About'
import Skills from "./component/Skills";
import { Routes, Route } from 'react-router-dom';
import Home from "./component/Home";
import Contact from "./component/Contact";
import { height } from "@mui/system";

function App() {
  return (
    <div style={{
      backgroundColor: 'lightgrey',
      width: '100vw',
      height: '100vh'
    }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
