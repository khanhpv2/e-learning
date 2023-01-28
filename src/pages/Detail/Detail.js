import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUpCourse } from "../../redux/actions/baseService";
import { getdetailCourse } from "../../redux/actions/QuanLyCourses";
import { http, USER_LOGIN } from "../../utils/config";

export default function Detail(props) {
  // console.log('props',props.match.params.id);
  // console.log('param',props.match.params.maDanhMuc)
  // console.log('props',props)

  const history = useHistory()
  const {detailCourse} = useSelector( state => state.coursesReducer );
  const dispatch = useDispatch();  
  let params = props.match.params.id
  const {userLogin} = useSelector (state => state.quanLyLogin)
  let abcd = {
      "maKhoaHoc": params,
      "taiKhoan": userLogin.taiKhoan
  }
  useEffect( () => {
    if (props && props.match && props.match.params && props.match.params.id) {
        dispatch(getdetailCourse(params))
    }
}, [props])

  
  return (
    <div>
      <section>
        <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
          <div>
            <h1 className="text-2xl font-bold lg:text-3xl">
               {detailCourse.tenKhoaHoc}
            </h1>
            <p className="mt-1 text-sm text-gray-500">Ma khoa hoc: {detailCourse.maKhoaHoc}</p>
          </div>
          <div className="grid gap-8 lg:items-start lg:grid-cols-4">
            <div className="lg:col-span-3">
              <div className="relative mt-4">
                <img
                  alt
                  src={detailCourse.hinhAnh}
                  className="w-full rounded-xl h-72 lg:h-[540px] object-cover"
                  onError={(e) => {
                    e.target.onError = null; e.target.src = `https:picsum.photos/id/5/50/50`}}
                />

              </div>
            
            </div>
            <div className="lg:top-0 lg:sticky">
              <form className="space-y-4 lg:pt-8">
              
                <div className="p-4 bg-gray-100 border rounded">
                  <p className="text-sm">
                    <span className="block">
                      Mua ngay để được giảm giá ngay trong ngày hôm nay
                    </span>
                    <a href className="inline-block mt-1 underline">
                      Nhấn vào để thanh toán
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold">$19.99</p>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-bold tracking-wide text-white uppercase bg-red-700 rounded"
                  onClick={(e)=>{
                    // handleRegister()
                    if (localStorage.getItem(USER_LOGIN)) {
                      e.preventDefault()
                      dispatch(signUpCourse(abcd))
                    } else {
                      alert('Bạn Phải Đăng Nhập')
                      history.push('/login')
                    }
                    
                  }}
                >
                  Đăng ký

                </button>
                {/* <button
                  type="button"
                  className="w-full px-6 py-3 text-sm font-bold tracking-wide uppercase bg-gray-100 border border-gray-300 rounded"
                  onClick={()=>{
                    handleRegister()
                  }}
                >
                  Đăng ký
                </button> */}
              </form>
            </div>
            <div className="lg:col-span-3">
              <div
                className="prose max-w-none"
                style={{
                  marginBottom: "1rem",
                  paddingBottom: "0.5rem",
                  borderBottom: "1px solid rgb(243 244 246)",

                  /* @apply mb-1 pb-2 border-b border-gray-200; */
                }}
              >
                <p style={{color:'20px',fontWeight:'00'}}>Mô tả</p>
                <p className="border border-neutral-300	p-2">
                    {detailCourse.moTa}
                </p>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  eveniet ipsam mollitia nesciunt illo! Suscipit, corrupti!
                </p> */}
                {/* <h3>Features</h3>
                <ul>
                  <li>Smooth neck design</li>
                  <li>Breathable fabric</li>
                  <li>Odour prevention</li>
                  <li>Made from recycled materials</li>
                </ul> */}
                {/* <iframe
                  src="https://www.youtube.com/watch?v=ePzSPqyr0cY"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: '100%',
                    marginTop: '1.5rem',
                    aspectRatio: '16 /9',
                    borderRadius: '0.75rem'}}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
