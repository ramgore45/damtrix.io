import React from 'react'
import { Screencsseffect } from '../basicscommon/Screencsseffect'

export const PortfolioWork = ({title,subTitle}) => {
  return (
  
        <div className='h-full w-full'>
            <div className='h-[80%] relative group'>
                <img className='h-full w-full rounded-xl transform ease-out duration-500 relative z-10'
                    src='https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1687550977-scaled.jpg'
                />
                <Screencsseffect/>
            </div>
            <div className='p-8 h-[20%]'>
                <p className='font-bold text-xl'>{title}</p>
                <p className='font-semibold text-gray-400'>{subTitle}</p>
            </div>
        </div>

  )
}
