
const stateDefault = {
    arrInfo: [],
    arrCourseAttend: [],
    arrCourseWaitingApproval: [],
    arrCoursesApproved:[]
}

export const quanlyProfile = (state = stateDefault,action) => {
    switch (action.type) {
        case 'GET_PROFILE': {
            state.arrInfo = action.arrInfo;
            return {...state}
        }
        case 'GET_COURSE_ATTEND': {
            state.arrCourseAttend = action.arrCourseAttend;
            return {...state}
        }
        case 'GET_COURSES_APPROVAL': {
            state.arrCourseWaitingApproval = action.arrCourseWaitingApproval;
            return {...state}
        }
        case 'GET_COURSES_APPROVED': {
            state.arrCoursesApproved = action.arrCoursesApproved;
            return {...state}
        }

        default : return state
    }
}