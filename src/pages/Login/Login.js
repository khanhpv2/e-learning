import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { http, USER_LOGIN } from "../../utils/config";
import {useSelector,useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../redux/actions/baseService';

export default function Login(props) {

  
  const dispatch = useDispatch()
  const {userLogin} = useSelector (state => state.quanLyLogin)
  
  // console.log('userLogin',userLogin)
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },
    
    validationSchema :
     yup.object({
      taiKhoan: yup.string().required('Yêu cầu nhập dữ liệu'),
      matKhau: yup.string().required('Yêu cầu nhập dữ liệu'),
    }),


    onSubmit: async (values) => {

      console.log('value',values)
     
      dispatch(signIn(values))
    },
  });
  if (localStorage.getItem(USER_LOGIN)) {
    alert("Bạn đã đăng nhập rồi !");
    return <Redirect to="/" />;
  }
  return (
    <div>
       <form onSubmit={formik.handleSubmit} >
        <h1 className="mb-8 text-3xl text-center">Đăng Nhập</h1>
        <input
          type="text"
          className="block border border-grey-light w-full p-5 rounded mb-4"
          name="taiKhoan"
          placeholder="Tài Khoản"
          onChange={formik.handleChange}
        />
        {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
         <p style={{color:'red'}}>{formik.errors.taiKhoan}</p>
       ) : null}
        <input
          type="password"
          className="block border border-grey-black w-full p-5 rounded mb-4"
          name="matKhau"
          placeholder="Mật Khẩu"
          onChange={formik.handleChange}
        />
        {formik.touched.matKhau && formik.errors.matKhau ? (
         <p style={{color:'red'}}>{formik.errors.matKhau}</p>
       ) : null}
        <button
          type="submit"
          className="w-full text-center py-3 rounded bg-cyan-400 text-white hover:bg-green-dark focus:outline-none my-1"
        >
          Login
        </button>
      </form>
    </div>
  )
}
