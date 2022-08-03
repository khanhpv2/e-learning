import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  cancelRegistrationCourse,
  getCourseInfoUser,
} from "../../../../redux/actions/QuanLyUser";
import { http } from "../../../../utils/config";

export default function Attendance(props) {
  const dispatch = useDispatch();
  const { arrCourseAttend } = useSelector((state) => state.quanlyProfile);
  // console.log(arrCourseAttend);
  const { userLogin } = useSelector((state) => state.quanLyLogin);

  useEffect(() => {
    dispatch(getCourseInfoUser());
  }, []);
  // console.log(arrInfo.taiKhoan)
  const renderCourseAttend = () => {
    return arrCourseAttend.map((course, index) => {
      return (
        <div className="course-of-user flex justify-between divide-y-4 border-2 border-slate-300 shadow-md mb-3">
          <div className="detail-course-user basis-3/4 flex">
            <div className="img-course-user ml-10 ">
              <img src={course.hinhAnh} className='py-2' style={{ width: 150, height: 100, objectFit:'cover' }} />
            </div>
            <div className="detail-course-user flex flex-col justify-center ml-10">
              <div className="mb-2">
                <NavLink className='bg-purple-600 p-1 rounded-full ' style={{color:'white'}} to={`/detail/${course.maKhoaHoc}`}>Detail</NavLink>{" "}
                <span className="font-semibold">{course.tenKhoaHoc}</span>
              </div>
              <div>
                {/* <p>
                  {course.moTa.length > 200
                    ? course.moTa.substr(0, 80) + "..."
                    : course.moTa}
                </p> */}
                 Mã khóa học: {course.maKhoaHoc}
              </div>
            </div>
          </div>
          <div className="button flex items-center " style={{width:'10%'}}>
            <button
              onClick={() => {
                let inFoUser = {
                  maKhoaHoc: course.maKhoaHoc,
                  taiKhoan: userLogin.taiKhoan,
                };
                dispatch(cancelRegistrationCourse(inFoUser));
              }}
              style={{color:'red'}}
              
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="container-profile">
        <div className="course-attendance-header">
          <h1 className="text-center" style={{ fontSize: "30px" }}>
            Khóa học đã ghi danh
          </h1>
          <p className="text-center" style={{ fontSize: "15x" }}>Thông tin về khóa học bạn đã ghi danh</p>
          <hr />
        </div>
        <div className="course-attendance-main">{renderCourseAttend()}</div>
      </div>
    </div>
  );
}
