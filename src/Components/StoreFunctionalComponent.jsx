import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../Store/Actions";
import { getUsers } from "../Store/Actions/CounterActions";

const StoreFunctionalComponent = () => {
    const count = useSelector(state => {
        return state.count
    });

    const users = useSelector(state => {
        return state.users
    }); 

    const dispatch = useDispatch();

    useEffect(() =>{
        if(count === 10){
            dispatch(getUsers());
        }
    }, [count])

    console.log('KW101', count)
    return(
        <div>
                Value of count is {count}
                <button onClick={() => dispatch({type: Actions.INCREMENT_COUNT, payload:count+1})}>Increase Count</button>
                <button onClick={() => dispatch({type: Actions.DECREMENT_COUNT, payload:count-1})}>Decrease Count</button>
                {
                    users?.map(item => {
                        return (
                            <div>{item.name}</div>          
                        )
                    })
                }
            </div>
    )
    
}

export default StoreFunctionalComponent;