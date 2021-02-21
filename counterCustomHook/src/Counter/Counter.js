import React, {useState} from 'react';
import DisplayCounter from '../DisplayCounter/DisplayCounter';
import useCounter from '../hooks/useCounter';

const Counter = () => {
    const [count, increment, decrement, reset] = useCounter();

    return(
        <div className = "counter">
            <DisplayCounter count = {count}/>
            <input type = "button" onClick = {increment} value = "increment"/>
            <input type = "button" onClick = {decrement} value = "decrement"/>
            <input type = "button" onClick = {reset} value = "reset"/>
        </div>
    );
}

export default Counter;