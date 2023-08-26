import React, {Component} from 'react';

class LifeCycleMethods extends Component {
    constructor(){
        super();
        console.log('Hello From Constructor');
    }

    componentDidMount() {
        console.log('Hello From componentDidMount');
    }

    shouldComponentUpdate (prevPros) {
        if(prevPros.name === this.props.name){
            return false
        }
    }

    componentWillUnmount() {
        console.log('Hello From componentWillUnmount');
    }

    componentDidUpdate(){
        console.log('Hello from componentDidUpdate');
    }

    render() {
        console.log('Hello From render')
        return(
            <div style={{backgroundColor:'green'}}>
                Hello From Life cycle method {this.props.name}
            </div>
        )
    }

}

export default LifeCycleMethods