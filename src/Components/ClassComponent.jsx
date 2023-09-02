import React from "react";
import any from './sample';
import {MyName} from './sample';
import LifeCycleMethods from './LifeCycleMethods'
import CounterButton from "./CounterButton";
import Counter from "./Counter";
import PureComponent from "./PureComponent";
import HooksComponent from "./HooksComponent";
import withRouter from "./HoC/withRouter";

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
        console.log('KW101', this.props)
        const {navigate} = this.props;
        return(
            <div style={{backgroundColor:'yellow'}}>
                 {this.props.location.hash.includes('something') ? <button onClick={() => {
               a = a +1
            }}>Increase a</button> : <><input value={this.state.name} onChange={(e) => {
                // console.log('KW101', e)
                this.setState({name: e.target.value })}} />
                    <button onClick={() => navigate(`/hooks?name=${this.state.name}`)}>Navigate to Hooks Component</button>
             </> }
             </div>
        )
                
    }
}

export default withRouter(ClassComponent)

