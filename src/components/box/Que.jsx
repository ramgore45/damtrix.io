import React, { useState } from 'react'
import { IoMdArrowRoundDown } from 'react-icons/io'

export const Que = ({question}) => {

    const [active,setActive] = useState(false)

    function toggle(){
        setActive(!active)
    }

  return (
    <div>
        <div className='cursor-pointer flex flex-col gap-y-6 py-6  border-b border-gray-400'
                onClick={toggle}
        >
            {/* que */}
            <div className='flex justify-between sm:text-3xl font-bold transition ease-in-out duration-500'>
                <p className={`${active ? 'text-green-500' : ''}`}>
                    {question}?
                </p>
                <div className='h-fit w-fit '>
                    <IoMdArrowRoundDown className={` h-fit w-fit text-white rounded-full from-violet-500 to-green-400 transition ease-in-out duration-500
                        ${active ? "rotate-180 bg-gradient-to-b": "bg-black"}
                    `}
                    />
                </div>
            </div>
            {/* ans */}
            {
                active &&
                <div className='w-[80%] text-gray-500'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                </div>
            }
        </div>
    </div>
  )
}
