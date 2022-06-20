import { StarIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Listcourses(props) {
  return (
    <div>
        <div className='flex flex-col items-start mx-8  space-y-3 mt-14 mb-8 text-center '>
            <h2 className='text-4xl  font-bold '>A broad selection of courses</h2>
            <h3 className='text-xl '>Choose from 183,000 online video courses with new addtion published  every month</h3>
            <div className='text-xs  lg:text-xl  flex space-x-4 ml-1 font-bold text-gray-500 cursor-pointer'>
                <h3>Python</h3>
                <h3>Excel</h3>
                <h3>Javascript</h3>
                <h3>Data Science</h3>
                <h3>AWS</h3>
                <h3>Drawing</h3>
            </div>

            <div className='text-left w-full border border-gray-300 p-7'>
                <h2 className='text-2xl font-bold mb-2 '>Expand your carrer opprtunities with Uedemy</h2>
                <h3 >Take one of Udemy range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps.
                 Choose from a range of courses that will appeal to</h3>
                <button className='border border-black font-bold text-sm p-2 mt-4 mb-8'>Universe Code</button>
            </div>
        </div>
        <div className='grid grid-cols-4 container mx-auto lg:flex-nowrap'>
            <div className='h-60 w-60'>
                {/* course */}
                <div className='flex flex-col items-start space-y-[1px]'>
                    <img className='h-32 w-full' />
                    <h2 className='font-bold text-md pt-1'>Title</h2>
                    <h2 className='text-xs text-gray-700'>Username</h2>
                    <div className='flex space-x-1'>
                        <h3 className='text-orange-800 font-bold text-sm'>Vote</h3>
                        <div className='flex items-center'>
                            <StarIcon className='w-4 text-orange-400' />
                            <StarIcon className='w-4 text-orange-400' />
                            <StarIcon className='w-4 text-orange-400' />
                            <StarIcon className='w-4 text-orange-400' />
                        </div>
                        <h3 className='text-xs'>19,000</h3>
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <h3 className=''>Price: 19$</h3>
                    </div>  
                </div>
            </div>
            <div className='h-60 w-60'>
                {/* course */}
                <div className='flex flex-col items-start space-y-[1px]'>
                    <img className='h-32 w-full' />
                    <h2 className='font-bold text-md pt-1'>Title</h2>
                    <h2 className='text-xs text-gray-700'>Username</h2>
                    <div className='flex space-x-1'>
                        <h3 className='text-orange-800 font-bold text-sm'>Vote</h3>
                        <div className='flex items-center'>
                            <StarIcon className='w-4 text-orange-400' />
                            <StarIcon className='w-4 text-orange-400' />
                            <StarIcon className='w-4 text-orange-400' />
                            <StarIcon className='w-4 text-orange-400' />
                        </div>
                        <h3 className='text-xs'>19,000</h3>
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <h3 className=''>Price: 19$</h3>
                    </div>  
                </div>
            </div>
            <div className='h-60 w-60'>
                {/* course */}
                <div className='flex flex-col items-start space-y-[1px]'>
                    <img className='h-32 w-full' />
                    <h2 className='font-bold text-md pt-1'>Title</h2>
                    <h2 className='text-xs text-gray-700'>Username</h2>
                    <div className='flex space-x-1'>
                        <h3 className='text-orange-800 font-bold text-sm'>Vote</h3>
                        <div className='flex items-center'>
                            <StarIcon className='w-4 text-orange-400' />
                            <StarIcon className='w-4 text-orange-400' />
                            <StarIcon className='w-4 text-orange-400' />
                            <StarIcon className='w-4 text-orange-400' />
                        </div>
                        <h3 className='text-xs'>19,000</h3>
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <h3 className=''>Price: 19$</h3>
                    </div>  
                </div>
            </div>
            <div className='h-60 w-60'>
                {/* course */}
                <div className='flex flex-col items-start space-y-[1px]'>
                    <img className='h-32 w-full' />
                    <h2 className='font-bold text-md pt-1'>Title</h2>
                    <h2 className='text-xs text-gray-700'>Username</h2>
                    <div className='flex space-x-1'>
                        <h3 className='text-orange-800 font-bold text-sm'>Vote</h3>
                        <div className='flex items-center'>
                            <StarIcon className='w-4 text-orange-400' />
                            <StarIcon className='w-4 text-orange-400' />
                            <StarIcon className='w-4 text-orange-400' />
                            <StarIcon className='w-4 text-orange-400' />
                        </div>
                        <h3 className='text-xs'>19,000</h3>
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <h3 className=''>Price: 19$</h3>
                    </div>  
                </div>
            </div>
            <div className='h-60 w-60'>
                {/* course */}
                <div className='flex flex-col items-start space-y-[1px]'>
                    <img className='h-32 w-full' />
                    <h2 className='font-bold text-md pt-1'>Title</h2>
                    <h2 className='text-xs text-gray-700'>Username</h2>
                    <div className='flex space-x-1'>
                        <h3 className='text-orange-800 font-bold text-sm'>Vote</h3>
                        <div className='flex items-center'>
                            <StarIcon className='w-4 text-orange-400' />
                            <StarIcon className='w-4 text-orange-400' />
                            <StarIcon className='w-4 text-orange-400' />
                            <StarIcon className='w-4 text-orange-400' />
                        </div>
                        <h3 className='text-xs'>19,000</h3>
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <h3 className=''>Price: 19$</h3>
                    </div>  
                </div>
            </div>
            <div className='h-60 w-60'>
                {/* course */}
                <div className='flex flex-col items-start space-y-[1px]'>
                    <img className='h-32 w-full' />
                    <h2 className='font-bold text-md pt-1'>Title</h2>
                    <h2 className='text-xs text-gray-700'>Username</h2>
                    <div className='flex space-x-1'>
                        <h3 className='text-orange-800 font-bold text-sm'>Vote</h3>
                        <div className='flex items-center'>
                            <StarIcon className='w-4 text-orange-400' />
                            <StarIcon className='w-4 text-orange-400' />
                            <StarIcon className='w-4 text-orange-400' />
                            <StarIcon className='w-4 text-orange-400' />
                        </div>
                        <h3 className='text-xs'>19,000</h3>
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <h3 className=''>Price: 19$</h3>
                    </div>  
                </div>
            </div>
        </div>
    </div>

  )
}
