import React from 'react'
import {
    ShoppingCartIcon,
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
} from "@heroicons/react/outline"
import { BeakerIcon } from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div>
        <div className='flex space-x-4 bg-white h-[74px] shadow-lg text-center justify-between items-center px-4 '>
            <MenuIcon className="h-6 w-6 md:hidden" /> 
            <h2 className='text-3xl'>Udemy</h2>
            <h3 className='hidden text-sm md:block'>Categories</h3>
            <form className='hidden bg-[#f8fafb] md:flex border border-black rounded-3xl flex-1 h-12 items-center'>
                <SearchIcon className='h-5 w-5 mx-4 text-gray-400' />
                <input type="text" placeholder='Search for anything' className='bg-transparent text-sm' />
            </form>
            <h3 className='hidden text-sm lg:block'>Udemy Business</h3>
            <h3 className='hidden text-sm lg:block md:hidden'>Teach on Uedemy</h3>
            <div className='flex'>
                <SearchIcon className='h-6 w-6 text-gray-400 md:hidden' />
                <ShoppingCartIcon className='h-6 w-6' />
            </div>
            <div className='hidden md:flex pr-4 space-x-4 justify-end'>
                <NavLink to='/login' style={{lineHeight:'38px'}} className='border border-black h-10 text-sm font-bold w-20 hover:bg-[#F5F5F5]'>
                    Login
                </NavLink>
                <NavLink to='/register' style={{lineHeight:'38px'}} className='border bg-black text-white border-black h-10 text-sm font-bold w-20 hover:bg-[#F5F5F5]'>
                    Sign up
                </NavLink>
                <button className='border border-black w-10 flex items-center justify-center hover:bg-[#F5F5F5]'>
                    <GlobeAltIcon className='h-5 w-5' />
                </button>
                {/* <NavLink to="/detail" >abcd</NavLink> */}
            </div>
        </div>
    </div>
  )
}
