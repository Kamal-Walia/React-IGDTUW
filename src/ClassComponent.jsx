import React from "react";
import any from './sample';
import {MyName} from './sample';
import LifeCycleMethods from './LifeCycleMethods'
import App from "./App";

let a = 0;
class ClassComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            count:0,
            name:"",
        }
    }

    updateCounter = () => {
            this.setState({count: this.state.count+1})
    }

    render(){
        return(
            <div style={{backgroundColor:'yellow'}}>
                Hello From Class Component

               {/* Count is {this.state.count}
               {/* A is {a} */}
            <button onClick={this.updateCounter}>Increase Count</button>

            <input value={this.state.name} onChange={(e) => {
                // console.log('KW101', e)
                this.setState({name: e.target.value })
            }} />

                {/* <App counter={this.state.count} name={this.state.name}/> */}

                {this.state.name === 'Kamal' ? null : <LifeCycleMethods name={this.state.name}/>}
                {this.state.name === 'Kamal' && <div>Hello World</div>}
            {/* <button onClick={() => {
               a = a +1
            }}>Increase a</button> */}
            </div>
        )
    }
}

export default ClassComponent