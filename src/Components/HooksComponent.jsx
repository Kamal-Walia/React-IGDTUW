import React,{useState, useEffect} from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";

const HooksComponent = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(0);

    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();


    useEffect(() => {
        console.log('Use Effect as ComponentDidMount');
        // example for componentWillUnmount
        // window.addEventListener('load');
        return () => {
            // example for componentWillUnmount
            // window.removeEventListener('load');
            console.log('Use Effect as ComponentWillUnmount')
        }
    }, [])

    useEffect(() => {
        console.log('Use Effect as ComponentDidUpdate')
    }, [count])

    const doSomething = () => {
        // Call any API
        navigate('/')
    }

    console.log('KW102', params, location);
    const parsedParams = new URLSearchParams(location.search);
    return(
        <div>Hooks Component {count}
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <Link to={{
            pathname:'/',
            search:'?userName=Kamal',
            hash:"#something"
        }}>Go to Home</Link>
        <div>Value from URL Param is: {parsedParams.get('name')}</div>
        <button onClick={doSomething}>Go To Home</button>
        </div>
    )
}

export default HooksComponent;

