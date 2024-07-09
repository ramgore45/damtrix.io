import React from 'react'
import { Mainheading } from '../basicscommon/Mainheading'
import { Subheading } from '../basicscommon/Subheading'
import { Description } from '../basicscommon/Description'
import { Btn } from '../basicscommon/Btn'
import { AnimationImages } from '../box/AnimationImages'
import ScrollAnimation from 'react-animate-on-scroll'

export const AboutusSection = () => {
  return (
    <div>
        <div className='text-black bg-white flex lg:justify-between p-14 sm:p-24 gap-x-6 flex-col lg:flex-row justify-center '>
            
            <div className='lg:w-[50%] w-[100%] sm:w-[90%] self-center'>
                <ScrollAnimation animateIn='fadeIn' duration='2'>
                    <AnimationImages/>
                </ScrollAnimation>
            </div>
            
            

            <div className='lg:w-[50%] w-full self-center'>
                <ScrollAnimation animateIn='fadeIn' duration="2">
                    <div className='flex flex-col gap-y-8 '>
                        {/* <img>dots Image Transaparent Absolute position</img> */}
                        <Mainheading Maintext={"About Us"}/>
                        <Subheading Subheadtext={"Making Your Business More Unique"}/>
                        <Description>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</p>
                            <p>by injected humour, or randomised words which don't look even slightly believable.</p>
                        </Description>
                        <div className='w-fit'>
                            <Btn Btntext={"Read More"}/>
                        </div>
                        
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    </div>
  )
}
