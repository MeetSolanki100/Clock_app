import React from 'react';
import {BrowserRouter as Router,Routes,Route,NavLink} from "react-router-dom";


function NavBar() {


  return (
    

      <div className="hmm">
        <div className="NavBar">
        <div className="container">
        <div className="navelements">
          <NavLink to='/'>Home</NavLink>
        </div>
        <div className='navelements' >
          <NavLink to='/DigitalClock'>Clock</NavLink>
        </div>
        <div className="navelements">
          <NavLink to='/Stopwatch'> StopWatch</NavLink>
        </div>
        <div className="navelements">
          <NavLink to='/Timer'> Timer</NavLink>
        </div>
        <div className="navelements">
          <NavLink to='/Alarm'> Alarm</NavLink>
        </div>
        </div>
      </div>
      </div>
      
      

    
  );
}

export default NavBar;


