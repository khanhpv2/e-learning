import { http } from "../../utils/config";


export const getArrInfoUser = (maNhom = 'GP01') => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`);
            const action = {
                type: 'GET_USERS',
                usersReducer: result.data
            };
            console.log(result)
            dispatch(action)
        } catch (err) {
            console.log(err)
        }
    }
}

export const deleteAccountUser = (userAccount) => {
    return async (dispatch) => {
            try {
             let result = await http.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userAccount}`)
             console.log(result.data.content)
             alert('Xoa Tai Khoan Thanh Cong')
             dispatch(getArrInfoUser())

            } catch (err) {
              alert(err.response.data)
            }
          
    }
}

export const searchInfoUsers = (values='' ,maNhom = 'GP01') => {
    return async (dispatch) => {
        if (values != '') {   
            try {
             let result = await http.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${maNhom}&tuKhoa=${values}`)
             console.log(result.data.content)
             const action = {
                type: 'GET_USERS',
                usersReducer: result.data
            };
            dispatch(action)
            } catch (err) {
              console.log(err.response.data)
            }
        }
        
    }
}


export const editInfoUser = (values) => {
    return async (dispatch) => {
        try {
            let result = await http.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",values);
            if (result.status == 200) {
              alert("Cap nhat thanh cong");
            }
          } catch (err) {
            console.log(err);
            // console.log('response from server',err.response.data)
            alert(err.response.data);
          }
    }
}
export const getCourseInfoUser = () => {
  return async (dispatch) => {
    try {
      let result = await http.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
      console.log("result", result);
      // setInfo(result.data)
      const action = {
        type: "GET_COURSE_ATTEND",
        arrCourseAttend: result.data.chiTietKhoaHocGhiDanh,
      };
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  }
}

export const getInfoUser = () => {
    return async (dispatch) => {
        try {
            let result = await http.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
            console.log("result", result);
            // setInfo(result.data)
            const action = {
              type: "GET_PROFILE",
              arrInfo: result.data,
            };
            dispatch(action);
          } catch (err) {
            console.log(err);
          }
    }
}


export const coursesWaitingApproval = (values) => {
    return async (dispatch) => {
        try {
            let result = await http.post("/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet",values);
            // console.log('values',values)
            // console.log(result.data);
            const action = {
                type: 'GET_COURSES_APPROVAL',
                arrCourseWaitingApproval: result.data
            };
            dispatch(action)
            
          } catch (err) {
            console.log(err);
          }
    }
}
export const coursesApproved = (values) => {
  return async (dispatch) => {
      try {
          let result = await http.post("/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet",values);
          // console.log('values',values)
          // console.log(result.data);
          const action = {
              type: 'GET_COURSES_APPROVED',
              arrCoursesApproved: result.data
          };
          dispatch(action)
          
        } catch (err) {
          console.log(err);
        }
  }
}

export const coursesApproval = (values) => {
    return async (dispatch) => {
        try {
            let result = await http.post("/api/QuanLyKhoaHoc/GhiDanhKhoaHoc",values);
            // console.log('values',values)
            console.log(result.data);
            // const action = {
            //     type: 'GET_COURSES_APPROVAL',
            //     arrCourseWaitingApproval: result.data
            // };
            // dispatch(action)
            
          } catch (err) {
            console.log(err);
          }
    }
}
export const cancelRegistrationCourse = (values) => {
  return async (dispatch) => {
    try{
      let result = await http.post('api/QuanLyKhoaHoc/HuyGhiDanh',values)
      if (result.status == 200) {
        alert(result.data)
        dispatch(getCourseInfoUser())
      }
    }catch(err) {
      console.log('err',err)
    }

  }
}




