const stateDefault = {
    arrCourses: [],
    arrDanhMuc:[],
    detailCourse: {}
}

export const coursesReducer = (state = stateDefault,action) => {
    switch (action.type) {
        case 'GET_COURSES': {
            state.arrCourses = action.arrCourses;
            return {...state}
        }
        case 'GET_DANH_MUC': {
            state.arrDanhMuc = action.arrDanhMuc;
            return {...state}
        }
        case 'GET_DETAIL': {
            state.detailCourse = action.detailCourse;
            return {...state}
        }
        case 'SEARCH_COURSES': {

            let info = action.searchCourse.toLowerCase();
            if (info != '') {
                let result = state.arrCourses.filter (course => course.tenKhoaHoc.toLowerCase().includes(info) === true);
                state.arrCourses = [...result];
                return {...state}
            }
        }

        default : return state
    }
}