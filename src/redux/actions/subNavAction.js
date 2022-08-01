import { http } from "../../utils/config";



export const getMenu = () => {
  return async (dispatch) => {
    try {
      let result = await http.get('api/QuanLyKhoaHoc/LayDanhMucKhoaHoc');
      const action = {
        type:'GET_SUB_MENU',
        arrMenu: result.data
      };  
      dispatch(action) 
    } catch (err) {
      console.log(err)
    }
  }
}