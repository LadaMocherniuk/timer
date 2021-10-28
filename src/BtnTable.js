import React from 'react';
export default function BtnTable(props) {
    return(
        <div>

            {(props.cond === 0) ? 
        <div>
            <button onClick={props.start}>START</button>
        </div> : ''}


            {(props.cond === 1) ?
        <div>
            <button onClick={props.stop}>STOP</button>
            <button onClick={props.reset}>RESET</button>
        </div> : ''}
    

            {(props.cond === 2) ? 
        <div>
            <button onClick={props.resume}>RESUME</button> 
            <button onClick={props.reset}>RESET</button>
        </div> : ''}
        </div>     
    );

};