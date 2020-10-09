import React, { useState } from 'react';
import styled from 'styled-components'

styled.span`
    color:red
`



const Counter = () => {
    const [count, setCount] = useState(0)
    const StyledCounter = styled.span`
    color: ${count >= 0 ? "green" : "red"}
    `


    const counterDecreaseHandler = () => setCount(count - 1)
    const counterIncreaseHandler = () => setCount(count + 1)
    return (
        <>
            <button onClick={counterDecreaseHandler}>-</button>
            <StyledCounter>{count}</StyledCounter>
            <button onClick={counterIncreaseHandler}>+</button>
        </>
    );
};

export default Counter;