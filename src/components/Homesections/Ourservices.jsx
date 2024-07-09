import React from 'react'
import { Mainheading } from '../basicscommon/Mainheading'
import { Subheading } from '../basicscommon/Subheading'
import { Description } from '../basicscommon/Description'
import { Service } from '../box/Service'
import { Btn } from '../basicscommon/Btn'

export const Ourservices = () => {
  return (
    <div>
        <div className='flex flex-col text-center justify-center gap-y-8 bg-gradient-to-r from-green-100 to-gray-100 p-14 sm:p-24 text-black'>
            <div className='self-center'>
                <Mainheading Maintext={"Our Services"}/>
            </div>

            <div>
                <Subheading Subheadtext={"Service We Provide"}/>
            </div>

            <div className='self-center' >
                <Description>
                    <p className='w-[90%] md:w-[700px]'>
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
                    </p>
                </Description>
            </div>

            <div className='flex lg:flex-row flex-wrap gap-x-8 gap-y-8 self-center justify-center '>
                <div className='w-[300px] lg:w-[22%]'>
                    <Service title={"Logo Design"}/>
                </div>
                
                <div className='w-[300px] lg:w-[22%]'>
                    <Service title={"Web Design"}/>
                </div>

                <div className='w-[300px] lg:w-[22%]'>
                    <Service title={"Development"}/>
                </div>

                <div className='w-[300px] lg:w-[22%]'>
                    <Service title={"Data Science"}/>
                </div>
            </div>

            <div className='w-fit self-center'>
              <Btn Btntext={"View All"}/>
            </div>
        </div>
    </div>
  )
}
