import React from "react";
import any from './sample';
import {MyName} from './sample';
import LifeCycleMethods from './LifeCycleMethods'
import App from "./App";
import CounterButton from "./CounterButton";
import Counter from "./Counter";
import PureComponent from "./PureComponent";
import HooksComponent from "./HooksComponent";

let a = 0;
class ClassComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            count:0,
            name:"kamal",
        }
    }

    updateCounter = () => {
            this.setState({counts: this.state.count+1})
    }

    showComponent = () => {
        if(this.state.count > 10){
            return (
                <div>Count is now greater than 10</div>
            )
        } else {
            return (
                <div>Count is now less than 10</div>
            )
        }
    }

    showSwitchComponent = () => {
        switch(this.state.name) {
            case 'kamal': 
            return <div>Name is now Kamal</div>
            case 'Something':
            return <div>Name is now Something</div>
            default: return <div>Default case</div>
        }
    }

    render(){
        return(
            <div style={{backgroundColor:'yellow'}}>
                {/* <Counter />
                <CounterButton /> */}
                {/* Hello From Class Component, current count {this.state.count}
                <LifeCycleMethods name={this.state.name} />
                <button onClick={this.updateCounter}>Increase Count</button>

                <PureComponent name={this.state.name} nameArray={[]}/> */}

                <HooksComponent />
               {/* Count is {this.state.count}
               {/* A is {a} */}
            {/* <button onClick={this.updateCounter}>Increase Count</button>

           <input value={this.state.name} onChange={(e) => {
               // console.log('KW101', e)
               this.setState({name: e.target.value })
            }} /> */}

                {/* <App counter={this.state.count} name={this.state.name}/> */}
{/* 
                 {this.state.name === 'Kamal' ? null : <LifeCycleMethods name={this.state.name}/>}
                {this.state.name === 'Kamal' && <div>Hello World</div>}
                {this.showComponent()}
               {this.showSwitchComponent()} */}
            {/* <button onClick={() => {
               a = a +1
            }}>Increase a</button> */}
            </div>
        )
    }
}

export default ClassComponent

