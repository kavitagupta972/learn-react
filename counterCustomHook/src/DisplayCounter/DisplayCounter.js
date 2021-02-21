import React from 'react';
// presentational component or stateless component

const DisplayCounter = ({count}) => {
    return (
        <div>
            <label>Counter : {count}</label>
        </div>
    );
}

export default DisplayCounter;