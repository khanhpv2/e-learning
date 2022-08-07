import React, { useEffect, useState } from "react";
import { ACCESSTOKEN, http } from "../../../../utils/config";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  editInfoUser,
  getInfoUser,
} from "../../../../redux/actions/QuanLyUser";

export default function InfoProfile(props) {
  const dispatch = useDispatch();
  const { arrInfo } = useSelector((state) => state.quanlyProfile);
  console.log('arrInfo',arrInfo);

  useEffect(() => {
    dispatch(getInfoUser());
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: arrInfo.taiKhoan,
      matKhau: arrInfo.matKhau,
      hoTen: arrInfo.hoTen,
      soDT: arrInfo.soDT,
      maNhom: "GP01",
      email: arrInfo.email,
      maLoaiNguoiDung: "HV",
    },

    validationSchema: yup.object({
      taiKhoan: yup.string().required("Yêu cầu nhập dữ liệu"),
      matKhau: yup.string().required("Yêu cầu nhập dữ liệu"),
      hoTen: yup.string().required("Yêu cầu nhập dữ liệu"),
      soDT: yup
        .string()
        .required("Yêu cầu nhập dữ liệu")
        .matches(/^[0-9]+$/),
      email: yup
        .string()
        .required("Yêu cầu nhập dữ liệu")
        .email("Không đúng định dạng email"),
    }),

    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log("value", values);
      // alert('abcd')
      dispatch(editInfoUser(values));
    },
  });

  return (
    <div>
      <div className="container-profile ">
        <h1 className="text-center" style={{ fontSize: "30px" }}>
          Thông tin tài khoản
        </h1>
        <p className="text-center">
          Xem thông tin hoặc chỉnh sửa thông tin của bạn
        </p>
        <hr />

        <form className="" onSubmit={formik.handleSubmit}>
          <div className=" block md:flex">
            <div className="w-full  p-8 bg-white lg:ml-4 ">
              <div className="">
                <div className="pb-6">
                  <label
                    htmlFor="name"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Tên tài khoản
                  </label>
                  <div className="border border-slate-200 ">
                    <input
                      name="taiKhoan"
                      className="border-1  rounded-r px-4 py-2 w-full"
                      type="text"
                      value={formik.values.taiKhoan}
                      onChange={formik.handleChange}
                      disabled={true}
                    />
                    {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                      <p style={{ color: "red" }}>{formik.errors.taiKhoan}</p>
                    ) : null}
                  </div>
                </div>
                <div className="pb-4 ">
                  <label
                    htmlFor="about"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Mật Khẩu
                  </label>
                  <div className="border border-slate-200 ">
                    <input
                      name="matKhau"
                      className="border-1  rounded-r px-4 py-2 w-full"
                      type="password"
                      value={formik.values.matKhau}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.matKhau && formik.errors.matKhau ? (
                      <p style={{ color: "red" }}>{formik.errors.matKhau}</p>
                    ) : null}
                  </div>
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="about"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Tên Người Dùng
                  </label>
                  <div className="border border-slate-200 ">
                  <input
                    name="hoTen"
                    className="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    value={formik.values.hoTen}
                    onChange={formik.handleChange}
                    />
                  {formik.touched.hoTen && formik.errors.hoTen ? (
                    <p style={{ color: "red" }}>{formik.errors.hoTen}</p>
                    ) : null}
                  </div> 

                </div>
                <div className="pb-4">
                  <label
                    htmlFor="about"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Số Điện Thoại
                  </label>
                  <div className="border border-slate-200 ">

                  <input
                    name="soDT"
                    className="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    value={formik.values.soDT}
                    onChange={formik.handleChange}
                    />
                  {formik.touched.soDT && formik.errors.soDT ? (
                    <p style={{ color: "red" }}>{formik.errors.soDT}</p>
                    ) : null}

                    </div>
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="about"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Email
                  </label>
                  <div className="border border-slate-200 ">

                  <input
                    name="email"
                    className="border-1  rounded-r px-4 py-2 w-full"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    disabled = {true}
                    />
                  {formik.touched.email && formik.errors.email ? (
                    <p style={{ color: "red" }}>{formik.errors.email}</p>
                    ) : null}
                    </div>
                </div>

                <div className="button">
                  <div>
                    <button
                      type="submit"
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      Lưu thay đổi
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
