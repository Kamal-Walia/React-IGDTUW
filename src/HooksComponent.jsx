import React,{useState, useEffect} from "react";

const HooksComponent = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(0);

    useEffect(() => {
        console.log('Use Effect')
    }, [])


    return(
        <div>Hooks Component {count}
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        </div>
    )
}

export default HooksComponent;