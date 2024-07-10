import React from 'react'
import { Reach } from '../box/Reach'

const data = [
  {
    number:'254+',
    title:'Project Complete',
  },
  {
    number:'164+',
    title:'Quality Team Member',
  },
  {
    number:'433+',
    title:'Awards Winning',
  },
  {
    number:'30+',
    title:'Years Of Experience',
  },
]

export const ReachofWebsites = () => {
  return (
    <div>
      <div className='flex justify-between md:px-24 md:py-12 p-12 gap-y-3 flex-wrap sm:flex-nowrap' data-aos="fade-up">
        {
          data.map((item)=>(
            <div key={item.index} className='w-[40%] md:w-fit'>
              <Reach number={item.number} title={item.title}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
