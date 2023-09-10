import Actions from './'

export const incrementCountActions = (updatedCount) => {
        return {
            type:Actions.INCREMENT_COUNT,
            payload: updatedCount
        }
}


export const getUsers = (updatedCount) => {
    return async (dispatch, getState) => {
        console.log('KW Current State', getState())
        const updatedCount =  getState().count + 100;
        const data = await fetch('https://reqres.in/api/user');
        const response = await data.json()
        const users = response.data;
        console.log('Thunk Example', users)
        dispatch({
            type:Actions.GET_USERS,
            payload: users
        })
        dispatch({
            type:Actions.INCREMENT_COUNT,
            payload: updatedCount
        })
    }
    
}


export const decrementCountActions = (updatedCount) => {

    return{
        type:Actions.DECREMENT_COUNT,
        payload: updatedCount
    }
    
}


// https://reqres.in/api/users