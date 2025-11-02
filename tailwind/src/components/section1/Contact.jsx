import React from 'react'
import { FaGoogle } from 'react-icons/fa';
import { MdAddIcCall } from 'react-icons/md';

function Contact() {
    return (
        <div className='   px-7 py-7 h-[40%] '>
            <div className=''>
                <h1 className=' text-3xl  text-white  font-bold m-2'>Contact</h1>
            </div>
            <div className='flex flex-wrap mt-3'>
                <a className='  text-white flex gap-2  w-1/2 p-2  '>
                     <span className='w-6 h-6 rounded-full bg-gray-500  text-black flex justify-center items-center mt-1'>   <FaGoogle className=' ' /></span>
                    <span className=' '>piyush@gmail.com</span>
                </a>
                <a className='  text-white flex gap-2  w-1/2 p-2  '>
                     <span className='w-6 h-6 rounded-full bg-gray-500  text-black flex justify-center items-center mt-1'>   <FaGoogle className=' ' /></span>
                    <span className=' '>piyush@gmail.com</span>
                </a>
                <a className='  text-white flex gap-2  w-1/2 p-2  '>
                     <span className='w-6 h-6 rounded-full bg-gray-500  text-black flex justify-center items-center mt-1'>   <FaGoogle className=' ' /></span>
                    <span className=' '>piyush@gmail.com</span>
                </a>
                <a className='  text-white flex gap-2  w-1/2 p-2  '>
                     <span className='w-6 h-6 rounded-full bg-gray-500  text-black flex justify-center items-center mt-1'>   <FaGoogle className=' ' /></span>
                    <span className=' '>piyush@gmail.com</span>
                </a>
                
                
                
                 
              
            </div>
        </div>
    )
}


export default Contact