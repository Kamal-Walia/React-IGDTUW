import React, {useState} from "react";

const componentWithCounter = (WrappedComponent) => {
    const CounterHOC = () => {
        const [counter, setCounter] = useState(0);

        const increaseCount = () => 
        {
            setCounter(counter + 1)
        }
    
        const decreaseCount = () => 
        {
            setCounter(counter - 1)
        }
        return (
        <WrappedComponent counter={counter} increaseCount={increaseCount} decreaseCount={decreaseCount}/>
    )
    }
    return CounterHOC;
}

export default componentWithCounter;