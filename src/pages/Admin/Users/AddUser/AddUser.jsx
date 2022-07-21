import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { http } from '../../../../utils/config';


export default function AddUser(props) {
    const formik = useFormik({
        initialValues: {
          taiKhoan: '',
          matKhau: '',
          hoTen: '',
          soDT:'',
          maLoaiNguoiDung:'HV',
          maNhom:'GP01',
          email:''
        },
       
        validationSchema :
         yup.object({
          taiKhoan: yup.string().required('Yêu cầu nhập dữ liệu'),
          matKhau: yup.string().required('Yêu cầu nhập dữ liệu'),
          hoTen: yup.string().required('Yêu cầu nhập dữ liệu'),
          soDT:yup.string().required('Yêu cầu nhập dữ liệu').matches(/^[0-9]+$/),
          email:yup.string().required('Yêu cầu nhập dữ liệu').email('Không đúng định dạng email')
        }),
    
    
        onSubmit: async (values) => {
          // alert(JSON.stringify(values, null, 2));
          console.log('value',values)
          // alert('abcd')
          try {
            let result = await http.post('/api/QuanLyNguoiDung/ThemNguoiDung',values);
            if (result.status == 200) {
                alert('Dang ky thanh cong')
              } 
          } catch (err) {
            console.log(err)
            // console.log('response from server',err.response.data)
            alert(err.response.data)
          }
        },
      });
    return (
        <div>
            <section className="bg-gray-100">
                <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                            <form action className="space-y-4" onSubmit={formik.handleSubmit}>
                                <div>
                                    <label className="sr-only" >Ho va Ten</label>
                                    <input className="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Ho Va Ten" name="hoTen" onChange={formik.handleChange}/>
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" >Tai Khoan</label>
                                        <input className="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Tai Khoan" name="taiKhoan" onChange={formik.handleChange} />
                                    </div>
                                    <div>
                                        <label className="sr-only" htmlFor="phone">Mat Khau</label>
                                        <input className="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Mat Khau" type="password" name="matKhau" onChange={formik.handleChange} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input className="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Email address" type="email" id="email" onChange={formik.handleChange} />
                                    </div>
                                    <div>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <input className="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Phone Number" type="tel" name="soDT" onChange={formik.handleChange} />
                                    </div>
                                </div>
                                <div>
                                    <label className="sr-only">Ma nhom:</label>
                                    <select name="maNhom" className='w-full p-3 text-sm border-gray-200 rounded-lg' onChange={formik.handleChange} >
                                        <option >GP01</option>
                                        <option >GP02</option>
                                        <option >GP03</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="sr-only">Ma Loai Nguoi Dung</label>
                                    <select name="maLoaiNguoiDung" className='w-full p-3 text-sm border-gray-200 rounded-lg' onChange={formik.handleChange} >
                                        <option >HV</option>
                                        <option >GV</option>
                                    </select>
                                </div>


                                <div className="mt-4">
                                    <button type="submit" className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto">
                                        <span className="font-medium"> Send Enquiry </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
