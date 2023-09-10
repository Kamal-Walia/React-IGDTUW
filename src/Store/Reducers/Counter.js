import Actions from "../Actions"

const initialState = {
    count:0,
    users:[]
}

const countReducer = (state = initialState, action) => {
    console.log('KW102', state, action)
    switch(action.type){
        case Actions.INCREMENT_COUNT: 
            return {...state,count: action.payload}
        case Actions.DECREMENT_COUNT:
            return {...state,count: action.payload}
        case Actions.GET_USERS:
            return {...state, users: action.payload}    
        default: return state    
    }
}

export default countReducer;