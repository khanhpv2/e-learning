const stateDefault = {
    arrCourses: []
}

export const coursesReducer = (state = stateDefault,action) => {
    switch (action.type) {
        case 'GET_COURSES': {
            state.arrCourses = action.arrCourses;
            return {...state}
        }

        default : return state
    }
}