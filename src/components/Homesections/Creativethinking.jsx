import React from 'react'
import { Mainheading } from '../basicscommon/Mainheading'
import { Description } from '../basicscommon/Description'
import { Btn } from '../basicscommon/Btn'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { PiMouseLeftClickDuotone } from 'react-icons/pi'

export const Creativethinking = () => {
  return (
    <div >
        <div className='flex flex-wrap justify-between px-10 sm:px-24 content-center my-20 pb-24 relative overflow-hidden'>
            {/* left side */}
            <div className='lg:w-[50%] flex flex-col gap-y-10 self-center w-full'>
                <Mainheading Maintext={"Creative Thinking"}/>
                <div className='sm:text-6xl text-3xl font-bold flex flex-col gap-y-2 '>
                    <span className=''>Strategic Thinking,</span>
                    <span> Tangible <span> </span></span>
                    <span className='text-[#61c479]'>
                            Results for Business!
                    </span>
                </div>
                <Description>
                    <p className='text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Description>
                <button className='w-fit p-3 px-8 text-violet-100 font-bold  rounded-full text-center bg-gradient-to-r from-green-600 to-violet-600
                    hover:bg-gradient-to-l transition ease-in-out duration-500
                '>
                    Explore Now
                </button>
                
            </div>

            {/* right side */}
            <div className='lg:w-[50%] flex gap-x-5 self-center relative lg:left-20 sm:left-36 top-14'>

                <div className='lg:h-[450px] lg:w-[350px] 
                                sm:h-[380px] sm:w-[280px] 
                                h-[300px] w-[210px]
                                self-center relative z-20'>
                    <img className='animation1 transition h-full rounded-full border-4 border-red-950 shadow-lg'
                        src='https://t3.ftcdn.net/jpg/03/89/71/46/360_F_389714673_2h7cQh8hPJgcZIZ1u2LSlld8TcfwpPNi.jpg'
                    />
                </div>

                <div className='lg:h-[600px] lg:w-[400px] animation2
                                sm:h-[500px] sm:w-[300px] justify-center
                                h-[400px] w-[190px]
                                relative z-10'>
                    <div className='h-full w-full border-2 rounded-full border-green-600 relative bottom-10 right-36 '></div>
                    <div className='h-full w-full absolute top-0 right-28'>
                        <img className='h-full w-full rounded-full '
                            src='https://t3.ftcdn.net/jpg/03/89/71/46/360_F_389714673_2h7cQh8hPJgcZIZ1u2LSlld8TcfwpPNi.jpg'
                        />
                    </div>
                </div>

            </div>

            <div className='h-12 w-20 mx-auto bg-black border-t border-gray-300  text-white rounded-b-full absolute bottom-[-127px] right-0 left-0'
            >
                <PiMouseLeftClickDuotone className='my-auto mx-auto text-xl animation2 '/>
            </div>
        </div>
    </div>
  )
}
