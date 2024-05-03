import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DigitalClock from './DigitalClock';
import StopWatch from './StopWatch';
import Home from './Home';
import NavBar from './NavBar';
import Timer from './Timer';
import Nav from './Nav';
import Alarm from './Alarm';
function App() {
  return (
    <>
    
    <Router>
    <NavBar/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DigitalClock" element={<DigitalClock />} />
          <Route path="/Stopwatch" element={<StopWatch />} />
          <Route path='/Timer' element={<Timer/>}></Route>
          <Route path='/Alarm' element={<Alarm/>}></Route>
        </Routes>
    </Router>
       
    </>
  );
}

export default App;

