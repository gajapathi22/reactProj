import React from "react";
import NavBar  from "./components/Navbar";
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/screens/Home';
import Team from './components/screens/Team';
import About from './components/screens/About';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </BrowserRouter>
   
   
  );
}

export default App;
