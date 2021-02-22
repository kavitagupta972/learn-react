import React, { useRef } from "react";

function Uncontrolled(){
    const textRef = useRef(null);

    function getTextValue(){
        console.log(textRef);
        console.log(textRef.current.value);
    }
    return (
        <div className = "unControlled">
            <h1> Uncontrolled Component</h1>
            <input type = "text" ref={textRef} />
            <input type = "submit" value = "submit" onClick={getTextValue}/>
        </div>
    );
}

export default Uncontrolled;