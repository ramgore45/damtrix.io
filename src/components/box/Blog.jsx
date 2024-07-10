import React from 'react'
import { Btn } from '../basicscommon/Btn'
import { Screencsseffect } from '../basicscommon/Screencsseffect'

export const Blog = ({heading}) => {
  return (
    <div>
        <div className='flex flex-col justify-center group'>
            <div className='relative'>
                <img className='rounded-xl relative z-10'
                    src='https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1687550977-scaled.jpg'
                />
                <Screencsseffect/>
            </div>

            <div className='flex flex-col p-5 gap-y-5 '>
                <div className='flex gap-x-5 text-gray-500 text-semibold'>
                    <p>By Admin</p>
                    <p>March 8, 2024</p>
                </div>

                <div className='flex text-xl text-start font-bold hover:text-green-400 transition ease-in-out duration-500'>
                    {heading}
                </div>
                
                <div className='text-start text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a libero maximus, rhoncus ex vel, suscipit velit. Donec in interdum
                </div>
                <div className='w-fit'>
                    <Btn Btntext={"Read More"}/>
                </div>
            </div>
        </div>
    </div>
  )
}
