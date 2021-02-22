import React, {useState} from 'react';

function Controlled() {

    const [inputValue, setInputValue] = useState("");

    function onTextChange(event){
        setInputValue(event.target.value);
    }
    function getTextValue(event) {
        console.log("input value", inputValue);
    }

    return (
        <div className="controlled">
            <h1> Controlled Component</h1>
            <input type = "text" value={inputValue} onChange = {onTextChange}/>
            <input type = "submit" value="submit" onClick = {getTextValue}/>
        </div>
    );
}

export default Controlled;