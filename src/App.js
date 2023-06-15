import React from 'react';
import NavBar from './components/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/screens/Home';
import Team from './components/screens/Team';
import About from './components/screens/About';
import Login from './components/screens/Login';
import { Provider } from 'react-redux';
import store from '../src/components/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
