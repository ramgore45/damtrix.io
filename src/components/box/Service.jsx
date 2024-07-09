import React from 'react'
import { Description } from '../basicscommon/Description'
import { AiOutlineAntDesign } from 'react-icons/ai'

export const Service = ({title}) => {
  return (
    <div>
        <div className='bg-gray-200 p-7 pt-16 flex flex-col gap-y-7 justify-center relative rounded-xl mt-10 group border 
                 hover:bg-white hover:border-y-violet-600 hover:border-x-green-500 hover:scale-105 transition ease-in-out duration-500'>
            <div className='h-20 w-20 mx-auto bg-black text-white rounded-full absolute top-[-35px] right-0 left-0 from-violet-400 to-green-400
                group-hover:bg-gradient-to-r group-hover:transition-all'
            >
                <AiOutlineAntDesign className='my-auto mx-auto h-full text-4xl group-hover:animate-spin'/>
            </div>
            <div className='text-xl font-bold'>
                {title}
            </div>
            <div>
                <Description>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The
                </Description>
            </div>
        </div>
    </div>
  )
}
