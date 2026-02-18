import React, { useState } from 'react';


function StepCounter({initialValue = 0, step =1}) {
    const [count, setCount] = useState(initialValue);
    const [history, setHistory] = useState([]);
    const [operationCount, setOperationCount] = useState(0);


    const handleIncrement = () => {
        const newValue = count + step;
        setCount(newValue);
        setHistory([...history, newValue]);
        setOperationCount(operationCount + 1);
    }

    const handleDecrement = () => {
        const newValue = count - step;
        setCount(newValue);
        setHistory([...history, newValue]);
        setOperationCount(operationCount + 1);
    }

    const handleReset = () => {
        setCount(initialValue);
        setHistory([]);
        setOperationCount(0);
    }

    const lastFive = history.slice(-5)

    return(
        <div>
            <h2>Counter</h2>
            <p>Current: {count}</p>
            <p> Total: {operationCount}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>X</button>
            <h4>Last counts:</h4>
            <ul>
                {lastFive.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    )
}

export default StepCounter;