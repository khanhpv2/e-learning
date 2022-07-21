const stateDefault = {
    stateEditUser: false,
    infoEditUser : {}
}

export const editUserReducer = (state = stateDefault,action) => {
    switch (action.type) {
        case 'GET_STATE_POPUP_USER': {
            state.stateEditUser = action.stateEditUser;
            state.infoEditUser = action.infoEditUser;
            return {...state}
        }
       
        default : return state
    }
}