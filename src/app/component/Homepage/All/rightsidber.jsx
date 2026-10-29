import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

export default function RightSidebar() {
  return (
    <div>
       
        <h2 className='flex  justify-center py-3 font-bold text-xl'>Login With </h2>
        <div className='flex flex-col gap-2'>
           <button className='btn border-blue-500 text-blue-500 '> <FaGoogle></FaGoogle>
            Login With google </button>
         <button className='btn'> <FaGithub></FaGithub>
            Login With github </button>

        </div>
        
    </div>
  )
}
