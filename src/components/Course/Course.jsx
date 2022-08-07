

import React from 'react'
import { StarIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Course({course, index}) {

  const [isError,setisError] = useState(false);
  // console.log(props)  
  return (
    <NavLink to={`/detail/${course.maKhoaHoc}`} className='h-60 w-1/4 mb-5 px-16'>
            {/* course */}
            <div className='flex flex-col items-start space-y-[1px]'>
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
                    {/* <h3 className='text-gray-800 text-sm line-through'>10$</h3> */}
                </div>  
            </div>
        </NavLink>
  )
}
