import React,{useState,useEffect,useRef} from 'react'


function StopWatch() {

    const [run, setRun] = useState(false);
    const [time,setTime] = useState(0);
    const intervalID = useRef(null);
    const startTimeref =useRef(0);

    useEffect(()=>{
        if(run)
        {
            intervalID.current= setInterval(()=>{
            setTime(Date.now() - startTimeref.current);
            },10)
        }

        return()=>{
            clearInterval(intervalID.current)
        }
    },[run]);

    function start(){

        setRun(true);
        startTimeref.current = Date.now() - time;
        console.log(startTimeref.current);

    }

    function stop(){
        setRun(false);

    }
    function restart(){
        setRun(false)
        setTime(0); 

    }

    function formatTime(){
        let hours = Math.floor(time/(1000*60*60));
        let mins = Math.floor(time/(1000*60)%60);
        let secs = Math.floor(time/(1000)%60);
        let milisecs = Math.floor((time%1000)/10);

        hours = String(hours).padStart(2,"0");
        mins = String(mins).padStart(2,"0");
        secs = String(secs).padStart(2,"0");
        milisecs = String(milisecs).padStart(2,"0");
        return `${hours}:${mins}:${secs}:${milisecs}`;
    }
    
  return (
   <>
   <div className="body">
   <div className="stopwatch">
        <div className="display">
            {formatTime()}
        </div>
        <div className="control">
            <button onClick={start} className='startButton'>Start</button>
            <button onClick={stop} className='stopButton'>Stop</button>
            <button onClick={restart} className='restartButton'>restart</button>
        </div>
    </div>
   </div>
   </>
  )
}

export default StopWatch