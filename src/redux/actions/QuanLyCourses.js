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
export const getarrCourse = (values) => {
    return async (dispatch) => {
        try {
            let result = await http.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01');
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
export const searcharrCourse = (values) => {
    return  (dispatch) => {
        const action = {
            type: 'SEARCH_COURSES',
            searchCourse: values
        }
        dispatch(action)
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


