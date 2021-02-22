import {useState} from "react";
function useCounter(initialCount){
    
    let [count, setCount] = useState(initialCount);
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    const decrement = () => {

        setCount(prevCount => prevCount > initialCount ?prevCount - 1 : initialCount);
    }
    const reset = () => {
        setCount(initialCount);
    }
    return [count, increment, decrement, reset];
}
export default useCounter;