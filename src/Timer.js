
import React, { useState } from 'react';
import TimerTable from './TimerTable';
import BtnTable from './BtnTable';
 


export default function Timer() {
    const [time, setTime] = useState({hour: 0, minute: 0, second: 0});
    const [int, setInterval] = useState(0);
    const [status, useStatus] = useState(0);


    const start = () => {
        pushBtn();
        status(1);
        setInterval(setInterval(pushBtn, 1000));

    }
    const stop = () => {
        clearInterval(int);
        useStatus(0);
      
    }
    
    const reset = () => {
        clearInterval(int);
        useStatus(0);
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
        return setTime({hour:currentHour, minute:currentMinute, second:currentSecond});
    }
    return(
        <div>
            <TimerTable time={time}/>
            <BtnTable onClick={start} status={status} stop={stop} reset={reset} resume={resume}/>
  
        </div>
    )

}









