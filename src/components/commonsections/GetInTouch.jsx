import React from 'react'
import { Mainheading } from '../basicscommon/Mainheading'
import { Subheading } from '../basicscommon/Subheading'
import { Description } from '../basicscommon/Description'
import { FaPhone } from 'react-icons/fa6'
import { TbMailOpenedFilled } from 'react-icons/tb'
import { Form } from '../box/Form'

export const GetInTouch = () => {
  return (
    <div>
        <div className='bg-white w-full h-fit p-10 sm:p-24'>
            <div className='bg-gradient-to-r flex flex-col md:flex-row gap-y-8 from-gray-100 to-gray-50 w-fit rounded-3xl p-8 sm:p-12 gap-x-10' data-aos="fade-up">
                {/* left */}
                <div className='md:w-[50%] text-black flex flex-col gap-y-8'>
                    <div>
                        <Mainheading Maintext={"Get In Touch"}/>
                    </div>
                    <div>
                        <Subheading Subheadtext={"Have any Project Plan In your Mind?"}/>
                    </div>
                    <div>
                        <Description>
                            <p>
                                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
                            </p>
                        </Description>
                    </div>
                    
                    {/* first iCon */}
                    <div className='w-fit flex gap-x-4 text-black'>
                        <div className='h-14 w-14 rounded-full bg-gradient-to-l from-violet-500 to-green-500 text-white flex'>
                            <FaPhone className='mx-auto my-auto text-xl'/>
                        </div>
                        <div className='self-center'>
                            <p className='text-gray-400'>For urgent help</p>
                            <p className='font-semibold'>+ 0000 123-456-789</p>
                        </div>
                    </div>
                    {/* Second icon */}
                    <div className='w-fit flex gap-x-4 text-black'>
                        <div className='h-14 w-14 rounded-full bg-gradient-to-l from-violet-500 to-green-500 text-white flex'>
                            <TbMailOpenedFilled className='mx-auto my-auto text-xl'/>
                        </div>
                        <div className='self-center'>
                            <p className='text-gray-400'>For urgent help</p>
                            <p className='font-semibold'>+ 0000 123-456-789</p>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className='md:w-[50%] text-black md:self-center' data-aos="fade-up">
                   <Form/>
                </div>
            </div>
        </div>
    </div>
  )
}
