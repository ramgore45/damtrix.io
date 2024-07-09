import React from 'react'

export const Reach = ({number, title}) => {
  return (
    <div className='flex flex-col justify-center gap-y-3 '>
          <p className='text-6xl text-4xl font-extrabold self-center text-gray-300'>{number}</p>
          <p className='lg:text-xl  font-bold self-center'>{title}</p>
    </div>
  )
}
