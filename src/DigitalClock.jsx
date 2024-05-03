import React, {useEffect,useState} from "react";

export default function DigitalClock()
{
    const [time,setTime] = useState(new Date());

    useEffect(()=>{
        const intervalID= setInterval(()=>{
            setTime(new Date())
        },1000);

        return()=>{
            clearInterval(intervalID)
        };
    },[]);

    function formatTime()
    {
        let hours = time.getHours();
        const mins = time.getMinutes();
        const secs = time.getSeconds();
        let meridum = hours>=12 ? "PM" : "AM";

        hours = hours>12 ? hours-12 : hours;

        return `${padzero(hours)}:${padzero(mins)}:${padzero(secs)} ${meridum}`;
    }

    function padzero(number)
    {
        return (number<10 ? "0" : "")+ number;
    }
    return(<>
        <div className="body">
        <div className="digi-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
        </div>
    </>)
}