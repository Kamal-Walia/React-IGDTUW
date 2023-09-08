import React from 'react'
import AppContext from './context/Context'
import ContextConsumer from './ContextConsumer';
import UseContextComponent from './UseContextComponent';

class ContextClass extends React.Component {
    constructor(){
        super();
    }

    render() {
        return(
            <AppContext.Provider value={{name:'kamal', lastName:'walia'}}>
                <ContextConsumer />
                <UseContextComponent />
            </AppContext.Provider>
        )
    }

}

export default ContextClass;