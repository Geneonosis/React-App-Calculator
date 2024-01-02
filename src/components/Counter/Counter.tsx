import React, {useState} from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    /**
     * This is a callback function that will be called when the button is clicked.
     */
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Counter</h1>
            <p className="Counter-text">Current count: {count}</p>
            <button className="Cool-button" onClick={() => increment()}>Increment</button>
            <button className={"Cool-button"} onClick={() => decrement()}>Decrement</button>
        </div>
    );
}

export default Counter;