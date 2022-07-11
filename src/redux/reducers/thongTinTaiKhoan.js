const stateDefault = {
    infoUser : {},
    chiTietKhoaHocGhiDanh: [] 
 
 }
 
 export const thongTinTaiKhoan = (state = stateDefault,action) => {
     switch (action.type) {
         case 'INFO_ACCOUNT': {
             state.infoUser = action.infoUser
                
             return {...state}
         }
 
         default : return state
     }
 }