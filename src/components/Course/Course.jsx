

import React from 'react'
import { StarIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Course({course, index}) {

  const [isError,setisError] = useState(false);
  // console.log(props)  
  return (
    <NavLink to={`/detail/${course.maKhoaHoc}`} className=' w-1/4 mb-5'>
            {/* course */}
            
            {/* <div className='flex flex-col items-start space-y-[1px]'>
              <img className='h-32 w-full' alt='true' onError={()=>{setisError(true)}} src={!isError ? course?.hinhAnh : `https:picsum.photos/id/${index}/50/50`} />

                <h2 className='font-bold text-md pt-2 pb-2'>{course?.tenKhoaHoc.toUpperCase()}</h2>
                <div className='flex space-x-1 '>
                    <h3 className='text-orange-800 font-bold text-sm'>Vote</h3>
                    <div className='flex items-center pb-3'>
                        <StarIcon className='w-4 text-orange-400' />
                        <StarIcon className='w-4 text-orange-400' />
                        <StarIcon className='w-4 text-orange-400' />
                        <StarIcon className='w-4 text-orange-400' />
                    </div>
                    <p className='text-xs pl-4' style={{color:'black'}}>Lượt xem: {course?.luotXem} </p>
                </div>
                <div className='flex space-x-4 items-center'>
                    <h3 className='text-black font-bold'>Giá :  19$</h3>

                </div>  
            </div> */}
            
            <div className="">
                <div className=" mx-4"  >
                    <div className="w-full p-4">
                        <a style={{minHeight:'514px'}} className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                            <div className="relative pb-48 overflow-hidden">
                                <img className="absolute inset-0 h-full w-full object-cover" onError={()=>{setisError(true)}} src={!isError ? course?.hinhAnh : `https:picsum.photos/id/${index}/50/50`} alt="..." />
                            </div>
                            <div className="p-4" style={{minHeight:'215px'}} >
                                
                                <h2 className="mt-2 mb-2  font-bold">{course.tenKhoaHoc.toUpperCase()}</h2>
                                <p className="text-sm" >{ course.moTa.length > 100 ? course.moTa.substr(0,90) + '...' : course.moTa}</p>
                                <div className="mt-3 flex items-center">
                                    <span className="text-sm font-semibold">Giá</span>&nbsp;<span className="font-bold text-xl">45,00</span>&nbsp;<span className="text-sm font-semibold">€</span>
                                </div>
                            </div>
                            <div className="p-4 border-t border-b text-xs text-gray-700">
                                <span className="flex items-center mb-1">
                                    <i className="far fa-clock fa-fw mr-2 text-gray-900" /> Lượt xem : {course.luotXem}
                                </span>
                            </div>
                            <div className="p-4 flex items-center text-sm text-gray-600"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" /></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" /></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" /></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" /></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" /></svg><span className="ml-2">34 Bewertungen</span></div>
                        </a>
                    </div>
                </div>
            </div>
        </NavLink>
  )
}
