import { http } from "../../utils/config";


export const signUp = (values) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/api/QuanLyNguoiDung/DangKy',values);
            if (result.status == 200) {
                alert('Dang ky thanh cong')
              } 
          } catch (err) {
            console.log(err)
            // console.log('response from server',err.response.data)
            alert(err.response.data)
          }
    }
}
export const signIn = (values) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/api/QuanLyNguoiDung/DangNhap',values);
            if (result.status == 200) {
              alert('Dang Nhap Thanh Cong')
              const action = {
                type:'USER_LOGIN',
                userLogin: result.data
              }; 
                dispatch(action)
            }
          } catch (err) {
            alert(err.response.data)
          }
        }
}