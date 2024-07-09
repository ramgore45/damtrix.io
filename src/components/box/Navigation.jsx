import React from 'react'

export const Navigation = ({page}) => {
  return (
    <div className='sm:p-24 p-16 px-20 flex flex-col gap-y-8'>
        <div className='sm:text-4xl text-2xl font-bold'> {page}</div>
        <div className='font-semibold'>Home / {page}</div>
    </div>
  )
}
