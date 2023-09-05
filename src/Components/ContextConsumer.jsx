import React from 'react'
import AppContext from './context/Context'

class ContextConsumer extends React.Component {
    constructor(){
        super();
    }

    render() {
        return(
            <AppContext.Consumer>
                {
                    (context) => {
                        return(
                            <div>Hello {context.name} {context.lastName}</div>
                        )
                    }
                }

            </AppContext.Consumer>
        )
    }

}

export default ContextConsumer