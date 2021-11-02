import React from 'react';
import './App.css';

export default function TimerTable(props) {
    return(
        <div>
            <span>{(props.time.hour >= 10) ? props.time.hour : '0' + props.time.hour}</span>&nbsp;:&nbsp;
            <span>{(props.time.minute >= 10) ? props.time.minute : '0' + props.time.minute}</span>&nbsp;:&nbsp;
            <span>{(props.time.second >= 10) ? props.time.second : '0' + props.time.second}</span>
        </div>
    );
}