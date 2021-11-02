
import React, { useState } from 'react';
import TimerTable from './TimerTable';
import BtnTable from './BtnTable';
import './App.css';
 


export default function Timer() {
    const [time, setTime] = useState({hour: 0, minute: 0, second: 0});
    const [int, setInt ] = useState();
    const [status, setStatus] = useState(0);


    const start = () => {
        pushBtn();
        setStatus(1);
        setInt(setInterval(pushBtn, 1000));
    };
    const stop = () => {
        clearInterval(int);
        setStatus(2);
      
    }
    
    const reset = () => {
        clearInterval(int);
        setStatus(0);
        setTime({hour:0, minute:0, second:0});
    
    }
    const resume = () => start();

    let currentHour = time.hour, currentMinute = time.minute, currentSecond = time.second;

    const pushBtn = () => {
        if(currentMinute === 60) {
            currentHour++;
            currentMinute = 0;
        }
        if(currentSecond === 60) {
            currentMinute++;
            currentSecond = 0;
        }
        currentSecond++;
        return setTime({hour:currentHour, minute:currentMinute, second:currentSecond});
    }
    return (
        <div className="block">
            <div className="holder">
                <div className="stoptimer">
                <TimerTable time={time}/>
                <BtnTable start={start} status={status} stop={stop} reset={reset} resume={resume}/>
                </div>
            </div>
        </div>
    )

}





// pushBtn();
//         setStatus(1);
//         setInt(setInterval(pushBtn, 1000));



