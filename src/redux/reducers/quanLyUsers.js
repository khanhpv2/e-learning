const stateDefault = {
   arrUsers :[]

}

export const usersReducer = (state = stateDefault,action) => {
    switch (action.type) {
        case 'GET_USERS': {
            state.arrUsers = action.usersReducer;
            return {...state}
        }
       
        default : return state
    }
}