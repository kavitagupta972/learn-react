import {useState} from "react";
function useCounter(){
    
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
    return [count, increment, decrement, reset];
}
export default useCounter;