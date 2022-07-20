import React, {useState} from 'react';
import ButtonProps from "../ButtonProps/ButtonProps";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count - 1)}>-</button>
            <ButtonProps onClick={() => setCount(count + 1)} color="black">+</ButtonProps>
        </>
    );
};

export default Counter;