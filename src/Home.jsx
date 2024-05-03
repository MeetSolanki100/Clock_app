import React from 'react'
import {useNavigate} from 'react-router-dom';
function Home() {
  const navigate = useNavigate()
  return (
    <div className='body'>
        <div className="home">
        <button onClick={()=>{navigate('DigitalClock')}}>CLock</button>
        <button onClick={()=>{navigate('Stopwatch')}}>StopWatch</button>
        <button onClick={()=>{navigate('Timer')}}>Timer</button>
        <button onClick={()=>{navigate('Alarm')}}>Alarm</button>
        </div>
    </div>
  )
}

export default Home