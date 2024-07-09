import React from 'react'
import { Reach } from '../box/Reach'


export const ReachofWebsites = () => {
  return (
    <div>
      <div className='flex justify-between md:px-24 md:py-12 p-10 flex-wrap sm:flex-nowrap'>
        <div className='w-[40%] md:w-fit'>
          <Reach number={"254+"} title={"Project Complete"}/>
        </div>
        
        <div className='border-r border-b-rose-600 hidden md:flex'></div>
        
        <div className='w-[40%] md:w-fit'> 
          <Reach number={"164+"} title={"Quality Team Member"}/>
        </div>

        <div className='border-r border-b-rose-600  hidden md:flex'></div>

       <div className='w-[40%] md:w-fit'>
          <Reach number={"433+"} title={"Awards Winning"}/>
        </div>

        <div className='border-r border-b-rose-600  hidden md:flex'></div>
        
        <div className='w-[40%] md:w-fit'>
          <Reach number={"30+"} title={"Years Of Experience"}/>
        </div>
      </div>
    </div>
  )
}
