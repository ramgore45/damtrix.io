import React from 'react'

export const Btn = ({Btntext}) => {
  return (
    <div  className=' p-3 px-8 text-violet-800 font-bold border-2 border-green-400 from-violet-500 to-green-400 rounded-full text-center cursor-pointer
          hover:bg-gradient-to-r transition ease-in-out duration-500
    '>
      {Btntext}
    </div>
  )
}
