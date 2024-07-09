import React from 'react'

export const Icon = ({children}) => {
  return (
    <div className='flex justify-center h-7 w-7 sm:h-10 sm:w-10 p-2 bg-gray-400 rounded-full  from-violet-500 to-green-500
            hover:bg-gradient-to-r hover:text-white transition ease-in-out duration-300
        '>
        {children}
    </div>
  )
}
