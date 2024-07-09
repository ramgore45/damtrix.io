import React from 'react'
import { SlCalender } from 'react-icons/sl'

export const Recentpost = () => {
  return (
    <div className='font-medium gap-x-3 flex flex-col md:flex-row gap-y-2'>
            <img className='h-12 w-12 sm:h-20 sm:w-20 rounded-full self-center'
                src='https://img.freepik.com/free-photo/choosing-right-strategy_1098-1823.jpg'
            />
        <div  className='flex flex-col gap-y-2 text-[14px] sm:text-xl'>
            <div className='flex content-center gap-x-2  '><SlCalender className='self-center text-green-500'/> Mar 08, 2024</div>
            <p className='texthover '>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
  )
}
