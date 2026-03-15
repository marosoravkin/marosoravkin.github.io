import './App.css';
import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import SideBar from './components/SideBar.jsx'

const colors = [
  '#C99132', // deeper yellow-orange
  '#6FAF48', // richer soft green
  '#5D9BFF', // bolder blue
  '#E63946', // deeper red-pink
  '#5FCBFF', // sharper cyan
  '#8E7CC3', // deeper lavender
  '#6FAF48', // richer soft green again bc I like it
  '#F77F00', // stronger orange
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function App() {
    const [theme, setTheme] = useState('light');
  
    useEffect(() => {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);
  
  useEffect(() => {
    const handleHover = (e) => {
      if (e.target.matches('.braces-button')) {
        const randomColor = getRandomColor();
        document.documentElement.style.setProperty('--button-selected', randomColor);
      }
    };

    document.addEventListener('mouseover', handleHover);
    return () => document.removeEventListener('mouseover', handleHover);
  }, []);

  useEffect(() => {
    const handleActiveHover = (e) => {
      if (e.target.matches('.project-button')) {
        const randomColor = getRandomColor();
        document.documentElement.style.setProperty('--button-selected', randomColor);
      }
    };
  
    document.addEventListener('mouseover', handleActiveHover);
    return () => {
      document.removeEventListener('mouseover', handleActiveHover);
    };
  }, []);

  return (
    <Router>
      <SideBar theme={theme} setTheme={setTheme}  />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects getRandomColor={getRandomColor}/>} />
        <Route path="/about" element={<About getRandomColor={getRandomColor}/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
