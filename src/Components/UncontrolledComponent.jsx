import React, {useRef} from "react";

class UncontrolledComponent extends React.Component {
    constructor() {
        super();
        this.value = React.createRef();
    }

    render(){
        console.log('KW101', this.value.current)
        return(
            <div>
                <input ref={this.value} />
                <button onClick={() => {
                    console.log(this.value.current.value)
                }}>Submit</button>
                
            </div>
        )
    }

}

export const UncontrolledFunctionalComponent = () => {
    const inputField = useRef();
    return(
        <div>
        <input ref={inputField} />
        <button onClick={() => {
            console.log(inputField.current.value)
        }}>Submit From Functional Component</button>
    </div>
    )

}

export default UncontrolledComponent;