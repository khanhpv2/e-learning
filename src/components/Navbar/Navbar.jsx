import React, { useState } from 'react'
import {
    ShoppingCartIcon,
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
} from "@heroicons/react/outline"
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import SubNav from './SubNav/SubNav'
import style from './Navbar.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup'
import useHover from '../../CustomHook/useHover';

import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, message, Space } from 'antd';
import { ACCESSTOKEN, USER_LOGIN } from '../../utils/config'
import { searcharrCourse } from '../../redux/actions/QuanLyCourses'


export default function Navbar(props) {
    // const {history} = props
    const history = useHistory();
    // console.log('nav',props);
    // const location = useLocation();
    // console.log('location',location);
    const [isShown, setIsShown] = useState(true);
    const onClick = ({ key }) => {
        // message.info(`Click on item ${key}`);
        if (key == '1') {
            localStorage.removeItem(USER_LOGIN)
            localStorage.removeItem(ACCESSTOKEN)
            history.push('/')
            window.location.reload()

        }
        // if (key == '2') {
        //     history.push('/profile')

        // }
        
        
    };
    // console.log('props-nac',props)
    const menu = (
        <Menu
            onClick={onClick}
            items={[
                {
                    label: 'Đăng xuất',
                    key: '1',
                },
                // {
                //     label: 'Trang cá nhân',
                //     key: '2',
                // },
              
            ]}
        />
    );
    const handleClick = event => {
        // 👇️ toggle visibility
        setIsShown(current => !current);
    };
    const dispatch = useDispatch();
    // const history = useHistory()
    const [hoverRef, isHovered] = useHover();
    const { userLogin } = useSelector(state => state.quanLyLogin);
    const formik = useFormik({
        initialValues: {
         searchCourse: ''
        },
          
        onSubmit: async (values) => {
    
          console.log('value',values.searchCourse)
          dispatch(searcharrCourse(values.searchCourse))
        //   dispatch(signIn(values))
        },
      });
    return (
        <div id='header'>
            <div className='flex space-x-4 bg-white h-[74px] shadow-lg text-center justify-between items-center px-4 '>
                <MenuIcon className="h-6 w-6 md:hidden" />
                <h2 className='text-3xl cursor-pointer	' onClick={()=>{
                    history.push('/')
                }}>Udemy</h2>
                <button className={`text-sm md:block z-10  relative ${style.abcd}`} ref={hoverRef} style={{ padding: '10px 0' }} >Danh mục
                    <div className='absolute   elementToFadeInAndOut pt-10' style={{ top: '15px', minWidth: '140px', display: isHovered ? 'block' : 'none' }}>
                        <SubNav />
                    </div>
                </button>
                {/* <SubNav /> */}
                <form onSubmit={formik.handleSubmit}  className='hidden bg-[#f8fafb] md:flex border border-black rounded-3xl flex-1 h-12 items-center'>
                    <SearchIcon className='h-5 w-5 mx-4 text-gray-400' />
                    <input type="text"  onChange={formik.handleChange}  placeholder='Tìm kiếm' name='searchCourse' className={`${style.abcd} bg-transparent text-sm flex-1 h-full`} />
                </form>
                <button onClick={()=>{
                    history.push('/admin/users')
                }} className='hidden text-sm lg:block'>Quản Trị</button>
                <button 
                    onClick={()=>{
                        history.push("/profile" )
                        // window.location.reload()
                    }}
                     className='hidden text-sm lg:block'>Trang Cá Nhân</button>
                {/* <NavLink to='/profile' className='hidden text-sm lg:block md:hidden'>Profile</NavLink> */}
                <div className='flex'>
                    <SearchIcon className='h-6 w-6 text-gray-400 md:hidden' />
                    <ShoppingCartIcon className='h-6 w-6' />
                </div>
                <div className='hidden md:flex pr-4 space-x-4 justify-end' style={{height:'38px'}} >
                    {
                        userLogin.accessToken ? (<> 
                            <Dropdown overlay={menu} >
                                <a  onClick={(e) => e.preventDefault()}>
                                    <Space style={{color:'black',lineHeight:'38px'}}>
                                    Hi, {userLogin.hoTen}
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>

                        </>) :
                            <>
                                <NavLink to='/login' style={{ lineHeight: '38px', color: 'black' }} className={`border border-black h-10 text-sm font-bold w-20 hover:bg-[#F5F5F5] ${style.navLogin}`}>
                                    Đăng nhập
                                </NavLink>
                                <NavLink to='/register' style={{ color: 'white !important', lineHeight: '38px', backgroundColor: 'black' }} className={`border  text-white border-black h-10 text-sm font-bold w-20 hover:bg-[#F5F5F5] ${style.navRegister}`}>
                                    Đăng ký
                                </NavLink>
                            </>
                    }

                    <button className='border border-black w-10 flex items-center justify-center hover:bg-[#F5F5F5]'>
                        <GlobeAltIcon className='h-5 w-5' />
                    </button>

                </div>
            </div>
        </div>
    )
}
