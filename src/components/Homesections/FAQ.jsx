import React from 'react'
import { Mainheading } from '../basicscommon/Mainheading'
import { Subheading } from '../basicscommon/Subheading'
import { Description } from '../basicscommon/Description'
import { Que } from '../box/Que'
import { AnimationImages } from '../box/AnimationImages'

export const FAQ = () => {
  return (
    <div>
      <div className='flex flex-col gap-y-8 bg-gradient-to-r from-violet-100 to-green-50 p-14 sm:p-24 text-black'>

        <div >
          <Mainheading Maintext={"F, A, Q"}/>
        </div>

        <div>
          <Subheading Subheadtext={"Our Expert Answers"}/>
        </div>

        <div >
          <Description>
            <p className='md:w-[700px]'>
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
            </p>
          </Description>
        </div>

        <div className='flex flex-col lg:flex-row '>
          {/* Insert animation images set */}
          <div className='lg:w-[50%] sm:w-[80%] w-[100%] self-center'>
            <AnimationImages/>
          </div>

          {/* Questions */}
          <div className='h-fit lg:w-[50%] sm:w-[80%] w-[100%] p-8 sm:p-16 border border-green-500 rounded-2xl self-center'>
              <Que question={"What is a digital platform"}/>
              <Que question={"How can a digital platform helps your business grow"}/>
              <Que question={"How do I book my slot to meet with your technical team"}/>
              <Que question={"How many projects have your completed so far"}/>
          </div>
        </div>

      </div>
    </div>
  )
}
