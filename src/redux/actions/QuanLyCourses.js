import { http } from "../../utils/config";


export const addNewCourse = (values) => {
    return async (dispatch) => {
        try {
            let result = await http.post(
              "/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh",values
            );
            console.log(result);
            alert('Them Khoa Hoc Thanh Cong')
          } catch (err) {
            console.log(err);
            alert('Them Khoa  Hoc That Bai')
          }
    }
}
export const editCourse = (values) => {
    return async (dispatch) => {
        try {
            let result = await http.post(
              "/api/QuanLyKhoaHoc/CapNhatKhoaHocUpload",values
            );
            console.log(result);
            alert('Chinh Sua Khoa Hoc Thanh Cong')
          } catch (err) {
            console.log(err);
            alert('Chinh Sua Hoc That Bai')
          }
    }
}

export const getdetailCourse = (values) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${values}`); 
            const action = {
                type: 'GET_DETAIL',
                detailCourse: result.data
            };
            dispatch(action)
        } catch (err) {
            console.log('abcd',err.response.data)
        }
    }
}
export const getarrCourse = (manhom='GP01') => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${manhom}`);
            const action = {
                type: 'GET_COURSES',
                arrCourses: result.data
            };
            dispatch(action)
        } catch (err) {
            console.log(err)
        }
    }
}
export const searcharrCourse = (values,manhom='GP01') => {
    return async (dispatch) => {

        try {
            let result = await http.get(
            `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${values}&MaNhom=${manhom}`);
            const action = {
                type: 'SEARCH_COURSES',
                searchCourse: result.data
            };
            // console.log('result',result);
            dispatch(action)
        } catch (err) {
            console.log(err)
        }
    }
}


export const deleteCourse = (maKhoaHoc) => {
    return async (dispatch) => {
            try {
             let result = await http.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`)
            //  console.log(result.data.content)
             alert('Xoa Khoa Hoc Thanh Cong')
             dispatch(getarrCourse())

            } catch (err) {
            //  alert('Xoa Khoa Hoc Than Cong')

              alert(err.response.data)
            }
          
    }
}


