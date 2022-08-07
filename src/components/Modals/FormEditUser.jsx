import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { http } from '../../utils/config';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useState } from 'react';
import { editInfoUser } from '../../redux/actions/QuanLyUser';


export default function FormEditUser(props) {
  const { stateEditUser, infoEditUser } = useSelector(state => state.editUserReducer)
  console.log('infoEditUser', infoEditUser)
  console.log('stateEditUser', stateEditUser);
  //   const [showModal, setShowModal] = useState(false);
  // console.log('a',props.account);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: infoEditUser.taiKhoan,
      hoTen: infoEditUser.hoTen,
      soDt: infoEditUser.soDt,
      email: infoEditUser.email,
      maLoaiNguoiDung: "HV",
      matKhau: '',
      maNhom: "GP01",
    },

    // validationSchema: yup.object({
    //   taiKhoan: yup.string().required("Yêu cầu nhập dữ liệu"),
    //   // matKhau: yup.string().required("Yêu cầu nhập dữ liệu"),
    //   hoTen: yup.string().required("Yêu cầu nhập dữ liệu"),
    //   soDt: yup
    //     .string()
    //     .required("Yêu cầu nhập dữ liệu")
    //     .matches(/^[0-9]+$/),
    //   email: yup
    //     .string()
    //     .required("Yêu cầu nhập dữ liệu")
    //     .email("Không đúng định dạng email"),
    // }),


    onSubmit: (values) => {
      console.log('values', values)
      const action = {
        type: 'GET_STATE_POPUP_USER',
        stateEditUser: false,
        infoEditUser: {}
      };
      dispatch(action)
      dispatch(editInfoUser(values))
    },
  });
  const dispatch = useDispatch();

  if (stateEditUser == true) {
    return (
      <div>
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Thông tin người dùng
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    type='button'
                    onClick={() => {
                      const action = {
                        type: 'GET_STATE_POPUP_USER',
                        stateEditUser: false,
                        infoEditUser: {}
                      };
                      dispatch(action)
                    }}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}


                <div className="relative p-6 flex-auto">

                  <form className="space-y-4" onSubmit={formik.handleSubmit}>
                    <div>
                      <label className="" >Họ và tên</label>
                      <input className="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Ho Va Ten" name="hoTen" value={formik.values.hoTen} onChange={formik.handleChange} />
                      {/* {formik.touched.hoTen && formik.errors.hoTen ? (
                    <p style={{ color: "red" }}>{formik.errors.hoTen}</p>
                  ) : null} */}
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="" >Tài Khoản</label>
                        <input className="w-full p-3 text-sm border-gray-200 rounded-lg" disabled="true" placeholder="Tai Khoan" name="taiKhoan" value={formik.values.taiKhoan} onChange={formik.handleChange} />
                        {/* {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                      <p style={{ color: "red" }}>{formik.errors.taiKhoan}</p>
                    ) : null} */}
                      </div>
                      <div>
                        <label className="" >Mật Khẩu</label>
                        <input className="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="**********" name="matKhau" onChange={formik.handleChange} />
                        {/* {formik.touched.matKhau && formik.errors.matKhau ? (
                    <p style={{ color: "red" }}>{formik.errors.matKhau}</p>
                  ) : null} */}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className=""  >Email</label>
                        <input className="w-full p-3 text-sm border-gray-200 rounded-lg" disabled="true" placeholder="Email address" value={formik.values.email} onChange={formik.handleChange} />
                      </div>
                      <div>
                        <label className="" >Phone</label>
                        <input className="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Phone Number" name="soDt" value={formik.values.soDt} onChange={formik.handleChange} />
                        {/* {formik.touched.soDt && formik.errors.soDt ? (
                    <p style={{ color: "red" }}>{formik.errors.soDt}</p>
                  ) : null} */}
                      </div>
                    </div>
                    <div>
                      <label className="">Mã Loại Người Dùng</label>
                      <select name="maLoaiNguoiDung" className='w-full p-3 text-sm border-gray-200 rounded-lg' value={formik.values.maLoaiNguoiDung} onChange={formik.handleChange} >
                        <option >HV</option>
                        <option >GV</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          {
                            const action = {
                              type: 'GET_STATE_POPUP_USER',
                              stateEditUser: false,
                              infoEditUser: {}
                            };
                            dispatch(action)
                          }
                        }}
                      >
                        Đóng
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      // onClick={() => {
                      //     {const action = {
                      //         type: 'GET_STATE_POPUP_USER',
                      //         stateEditUser: false
                      //     };
                      //     dispatch(action)}

                      // }}
                      >
                        Lưu thay đổi
                      </button>
                    </div>
                  </form>


                </div>



                {/*footer*/}

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      </div>
    )
  }

}
