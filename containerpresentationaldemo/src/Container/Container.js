import React, {useState} from 'react';
import Presentational from '../Presentational/Presentational';

function Container(){

    let [val, setVal] = useState("Container component ");
    let [showData,setShowData] = useState(false);

   function  handleText(event){
       setVal(event.target.value);
       setShowData(false);
       console.log("inside handle text");
   }
   function showText(){
    setShowData(true);
   }
    return(
        <div className = "container">
            <input type = "text" onChange = {handleText} value = {val}/>
            <button value = "show text" onClick = {showText}>show text</button>
            {showData && <Presentational text = {val}/>}
        </div>
    );
}
export default Container;