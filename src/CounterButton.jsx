import React from "react";
import componentWithCounter from "./CounterHOC";

const CounterButton = (props) => {
    return (
        <div>
<input type='button' value={props.counter} onClick={props.increaseCount}></input>
<input type='button' value={props.counter} onClick={props.decreaseCount}></input>
        </div>
        
    )
}

export default componentWithCounter(CounterButton);

