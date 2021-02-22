import React, { useRef } from "react";

export default function Uncontrolled() {
  const inputRef = useRef(null);
  const handleSubmitButton = () => {
      console.log(inputRef);
    alert(inputRef.current.value);
  };
  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <input type="submit" value="submit" onClick={handleSubmitButton} />
    </div>
  );
}