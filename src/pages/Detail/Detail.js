import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdetailCourse } from "../../redux/actions/QuanLyCourses";
import { http } from "../../utils/config";

export default function Detail(props) {
  // console.log('props',props.match.params.id);
  // console.log('param',props.match.params.maDanhMuc)
  // console.log('props',props)


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

  const handleRegister = async ()=> {
    try {
        let result = await http.post('api/QuanLyKhoaHoc/DangKyKhoaHoc',abcd)
        if (result.status ==200 ) {
          alert(result.data)
        }
    }catch(err) {
      alert('Đã Đăng Ký Khóa Học Này Rồi')
    }
  }
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
                />

              </div>
              {/* <ul className="flex gap-1 mt-1">
                <li>
                  <img
                    className="object-cover w-16 h-16 rounded-md"
                    src="../../photos/tee-green-hanger-2.png"
                    alt
                  />
                </li>
                <li>
                  <img
                    className="object-cover w-16 h-16 rounded-md"
                    src="../../photos/tee-green-hanger-3.png"
                    alt
                  />
                </li>
                <li>
                  <img
                    className="object-cover w-16 h-16 rounded-md"
                    src="../../photos/tee-green-person.png"
                    alt
                  />
                </li>
                <li>
                  <img
                    className="object-cover w-16 h-16 rounded-md"
                    src="../../photos/tee-green-person-2.png"
                    alt
                  />
                </li>
              </ul> */}
            </div>
            <div className="lg:top-0 lg:sticky">
              <form className="space-y-4 lg:pt-8">
                {/* <fieldset>
                  <legend className="text-lg font-bold">Color</legend>
                  <div className="flex mt-2 space-x-1">
                    <label htmlFor="color_green" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_green"
                        name="color"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <span className="block w-6 h-6 bg-green-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300" />
                    </label>
                    <label htmlFor="color_blue" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_blue"
                        name="color"
                        className="sr-only peer"
                      />
                      <span className="block w-6 h-6 bg-blue-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300" />
                    </label>
                    <label htmlFor="color_pink" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_pink"
                        name="color"
                        className="sr-only peer"
                      />
                      <span className="block w-6 h-6 bg-pink-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300" />
                    </label>
                    <label htmlFor="color_red" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_red"
                        name="color"
                        className="sr-only peer"
                      />
                      <span className="block w-6 h-6 bg-red-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300" />
                    </label>
                    <label htmlFor="color_indigo" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_indigo"
                        name="color"
                        className="sr-only peer"
                      />
                      <span className="block w-6 h-6 bg-indigo-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300" />
                    </label>
                  </div>
                </fieldset> */}
                {/* <fieldset>
                  <legend className="text-lg font-bold">Material</legend>
                  <div className="flex mt-2 space-x-1">
                    <label htmlFor="material_cotton" className="cursor-pointer">
                      <input
                        type="radio"
                        id="material_cotton"
                        name="material"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <span className="block px-3 py-1 text-xs border border-gray-200 rounded-full peer-checked:bg-gray-100">
                        Cotton
                      </span>
                    </label>
                    <label htmlFor="material_wool" className="cursor-pointer">
                      <input
                        type="radio"
                        id="material_wool"
                        name="material"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <span className="block px-3 py-1 text-xs border border-gray-200 rounded-full peer-checked:bg-gray-100">
                        Wool
                      </span>
                    </label>
                  </div>
                </fieldset> */}
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
                  onClick={()=>{
                    handleRegister()
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
