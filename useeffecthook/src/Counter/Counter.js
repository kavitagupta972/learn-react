import React, {useState, useEffect} from 'react';

const Counter = () => {
    
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);
    const incrementCounterOne = () => {
        setCount(prevCount => prevCount + 1);
    }
    const incrementCounterTwo = () => {
        setCount1(prevCount => prevCount + 1);
    }

    const reset = () => {
        setCount(0);
        setCount1(0);
    }
    // normal useEffect
    // useEffect(() =>{
    //     document.title = `clicked ${count} times`
    //     console.log('in useEffect hook');
    // });
    //useEffect with condition(conditional effect)
    useEffect(() =>{
        document.title = `clicked ${count} times`
        console.log('in useEffect hook');
    },[count]);

    return(
        <div className = "counter">
            <div className = "btnContainer"></div>
            <button onClick = {incrementCounterOne}>clicked {count} times</button>
            <br/>
            <button onClick = {incrementCounterTwo}>clicked {count1} times</button>
            <br/>
            <button onClick = {reset}>Reset Counter</button>
        </div>
    );
}

export default Counter;