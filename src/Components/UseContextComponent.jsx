import React, {useContext} from 'react';
import AppContext from './context/Context';

const UseContextComponent = ()  => {
    const context = useContext(AppContext);
    return(
        <div>
            I'm in Functional Component
            Context Value {`${context.name} ${context.lastName} `}
        </div>
    )
}

export default UseContextComponent;