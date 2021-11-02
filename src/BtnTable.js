import React from 'react';
import './App.css';


export default function BtnTable(props) {
    return(
        <div>
            {(props.status === 0) ? 
        <div>
            <button className="btn" onClick={props.start}>START</button>
        </div> : ''}


            {(props.status === 1) ?
        <div>
            <button  className="btn" onClick={props.stop}>STOP</button>
            <button className="btn" onClick={props.reset}>RESET</button>
        </div> : ''}
    

            {(props.status === 2) ? 
        <div>
            <button className="btn" onClick={props.resume}>RESUME</button> 
            <button className="btn" onClick={props.reset}>RESET</button>
        </div> : ''}
        </div>     
    );

};