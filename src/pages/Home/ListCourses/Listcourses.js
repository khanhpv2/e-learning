import { StarIcon } from "@heroicons/react/outline";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Course from "../../../components/Course/Course";
import SubNav from "../../../components/Navbar/SubNav/SubNav";
import { getarrCourse } from "../../../redux/actions/QuanLyCourses";
import { http, TOKEN_CYBERSOFT } from "../../../utils/config";
import style from './Listcourses.module.css'
export default function Listcourses(props) {
  const { arrCourses } = useSelector((state) => state.coursesReducer);
  const dispatch = useDispatch();
  const {arrMenu} = useSelector( state => state.subNavReducer );

  useEffect(() => {
    dispatch(getarrCourse());
  }, []);

  const renderCourses = () => {
    return arrCourses.map((course, index) => {
      return <Course course={course} index={index} />;
    });
  };
  const renderMenu = () => {
    return arrMenu.map((item,index)=>{
      // console.log('item',item);
      return  <div key={index}>
      <NavLink to={`/list-danhmuc/${item.maDanhMuc}`} className={style.subNav1} style={{fontSize:'15px'}} >{item.tenDanhMuc} </NavLink>
      </div>
    })
}
  return (
    <div>
      <div className="flex flex-col items-start mx-8  space-y-3 mt-14 mb-8 text-center ">
        <h2 className="text-4xl  font-bold ">Nhiều lựa chọn các khóa học</h2>
        <h3 className="text-xl ">
        Chọn từ 183.000 khóa học video trực tuyến với phụ đề mới xuất bản
          mỗi tháng
        </h3>
        <div className="text-xs  lg:text-xl  flex space-x-4 ml-1 font-bold text-gray-500 cursor-pointer">
          {/* <h3>Python</h3>
          <h3>Excel</h3>
          <h3>Javascript</h3>
          <h3>Data Science</h3>
          <h3>AWS</h3>
          <h3>Drawing</h3> */}
          {renderMenu()}
          {/* <SubNav /> */}

        </div>

        <div className="text-left w-full border border-gray-300 p-7">
          <h2 className="text-2xl font-bold mb-2 ">
              Mở rộng cơ hội nghề nghiệp của bạn với Uedemy
          </h2>
          <h3>
          Tham gia một trong các khóa họ học Python của Udemy và học cách viết code để
            sử dụng ngôn ngữ vô cùng hữu ích này. Cú pháp đơn giản của nó và
            tính dễ đọc làm cho Python trở nên hoàn hảo cho Flask, Django, khoa học dữ liệu,
            và học máy. Bạn sẽ học cách xây dựng mọi thứ từ
            trò chơi đến trang web đến ứng dụng. Chọn từ một loạt các khóa học sẽ
            hấp dẫn
          </h3>
          <button className="border border-black font-bold text-sm p-2 mt-4 mb-8">
            Thế Giới Code
          </button>
          <div className="flex flex-wrap ">
            {renderCourses()}
          </div>
        </div>
      </div>
      {/* grid grid-cols-4 container mx-auto */}
    </div>
  );
}
