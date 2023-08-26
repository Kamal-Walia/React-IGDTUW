import React from "react";
import componentWithCounter from "./CounterHOC";

const Counter = (props) => {
    return (
        <div style={{background:'green'}}>
        <div>Count is {props.counter}</div>
        <input type='button' value={'increase count'} onClick={props.increaseCount}></input>
        <input type='button' value={'decrease count'} onClick={props.decreaseCount}></input>
        </div>
    )
}

export default componentWithCounter(Counter);

