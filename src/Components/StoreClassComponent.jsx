import React from "react";
import { connect } from "react-redux";
import {incrementCountActions, decrementCountActions} from '../Store/Actions/CounterActions'
import axios from "axios";

class StoreClassComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            users: []
        }
    }


    componentDidMount() {
        // this.getUser()
        this.getUsersUsingAxios()
    }

    getUsersUsingAxios = () => {
        const data = {
            "status": "success",
            "data": {
                "name": "Hello",
                "salary": "123",
                "age": "23",
                "id": 121210
            }
        }
        // axios.get('https://reqres.in/api/users').then(response => {
        //     console.log("Response using axios", response)
        // })

        axios.post('https://dummy.restapiexample.com/api/v1/create', {data}).then(response => {
            console.log("Post Response using axios", response)
        })
    }

    addUser = () => {
        const data = {
            "status": "success",
            "data": {
                "name": "Hello",
                "salary": "123",
                "age": "23",
                "id": 121210
            }
        }
        fetch('https://dummy.restapiexample.com/api/v1/create', {method:'post', body: JSON.stringify(data)}).then((response)=>{
            
            response.json().then((jsonResponse) => {
                // this.setState({users: jsonResponse.data})
                console.log('Post Response', jsonResponse)
            })
        }).catch(err => {
            console.log('ERR in post', err)
        })
    }


    getUser  = () => {
        fetch('https://reqres.in/api/user').then((response)=>{
            console.log('KW1012', response)
                response.json().then((jsonResponse) => {
                    // this.setState({users: jsonResponse.data})
                    console.log('Get Response ', jsonResponse)
                }).catch((err) => {
                    console.log('ERR in Get', err)
                })
            })

    }

    render(){
        const {count,increaseCount,decreaseCount } = this.props;
        return(
            <div>
                Value of count is {count}
                <button onClick={() => increaseCount(count + 1)}>Increase Count</button>
                <button onClick={() => decreaseCount(count - 1)}>Decrease Count</button>

                {
                    this.state.users.length ? this.state.users.map(item => {
                        return(
                            <div>{item.first_name}</div>
                        )
                    }) : null
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        increaseCount: (updatedCount) => dispatch(incrementCountActions(updatedCount)),
        decreaseCount: (updatedCount) => dispatch(decrementCountActions(updatedCount))
    }
}
const mapStateToProps = (state) => {
    return {
        count:state.count
    }
}

// const connectedComponent = connect(mapStateToProps,mapDispatchToProps);
// export default connectedComponent(StoreClassComponent);

export default connect(mapStateToProps,mapDispatchToProps)(StoreClassComponent)
