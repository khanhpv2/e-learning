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
            alert('Them Khoa Hoc That Bai')
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


