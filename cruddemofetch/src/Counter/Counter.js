import React, {useState} from 'react';
import DisplayCounter from '../DisplayCounter/DisplayCounter';

const Counter = () => {
    
    let [count, setCount] = useState(0);
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    const decrement = () => {

        setCount(prevCount => prevCount >= 1 ?prevCount - 1 : 0);
    }
    const reset = () => {
        setCount(0);
    }

    return(
        <div className = "counter">
            <DisplayCounter count = {count}/>
            <div className = "b
            tnContainer"></div>
            <input type = "button" onClick = {increment} value = "increment"/>
            <input type = "button" onClick = {decrement} value = "decrement"/>
            <input type = "button" onClick = {reset} value = "reset"/>
        </div>
    );
}

export default Counter;