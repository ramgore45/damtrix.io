import React from 'react'
import { Companylogo } from '../../basicscommon/Companylogo'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'
import { SlCalender, SlSocialInstagram } from 'react-icons/sl'
import { MdPhoneInTalk } from 'react-icons/md'
import { FiMail } from 'react-icons/fi'
import { TbWorld } from 'react-icons/tb'
import { FaLocationDot } from 'react-icons/fa6'
import { Recentpost } from './Recentpost'
import { SingleListItem } from './SingleListItem'
import { Icon } from './Icon'

const serviceList = [
    {title:"Logo design",},{title:"Web Design",},{title:"Branding & Art",},{title:"Digital Marketing",},{title:"Design & Development",},
]

export const Footer = () => {
  return (
    <div className='bg-black'>
        <div className='flex flex-wrap lg:flex-nowwrap justify-evenly lg:p-10 gap-y-8 p-10 sm:p-24'>
            {/* first section */}
            <div className='lg:w-[20%] w-[40%]'>
                <div className='h-14 mb-5'> 
                    <Companylogo/>
                </div>
                <div className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, non.</div>
                <div className='flex text-black sm:w-[60%] justify-between '>
                    {/*4 Social media icons */}
                    <Icon><TiSocialFacebook className=' h-full w-full'/></Icon>
                    <Icon><SlSocialInstagram className=' h-full w-full'/></Icon>
                    <Icon><TiSocialTwitter className=' h-full w-full'/></Icon>
                    <Icon><TiSocialLinkedin className=' h-full w-full'/></Icon>
                </div>
            </div>
                
            <div  className='lg:w-[20%] w-[40%]'>
                <p className='text-xl sm:text-2xl font-semibold mb-8'>Our Services</p>
                <div className='font-medium gap-y-2 flex flex-col'>
                    {
                        serviceList.map((item)=>(
                            <SingleListItem key={item.index} text={item.title}/>
                        ))
                    }
                </div>
            </div>

            <div  className='lg:w-[20%] w-[40%]'>
                <p className='text-2xl font-semibold mb-8'>Recent Posts</p>

                <div className='flex flex-col gap-y-5'>
                    <Recentpost/>
                    <Recentpost/>
                </div>
            </div>

            <div  className='lg:w-[20%] w-[40%]'>
                <p className='text-xl sm:text-2xl font-semibold mb-5'>Get In Touch</p>
                {/* contact details */}
                <div className='font-medium gap-y-2 flex flex-col'>
                    <p className='flex gap-x-2'>
                        <Icon><MdPhoneInTalk className='self-center w-full h-full'/> </Icon>
                        <span className='text-[10px] sm:text-[16px] self-center'><SingleListItem text={"+00-123-456-789"}/></span>
                    </p>
                    <p className='flex gap-x-1 sm:gap-x-2'>
                        <Icon><FiMail className='self-center w-full h-full'/> </Icon>
                        <span className='text-[10px] sm:text-[16px] self-center'><SingleListItem text={"mail@webency.com"}/></span>
                    </p>
                    <p className='flex gap-x-2'>
                        <Icon><TbWorld className='self-center w-full h-full'/> </Icon>
                        <span className='text-[10px] sm:text-[16px] self-center'><SingleListItem text={"www.webency.com"}/></span>
                    </p>
                    <p className='flex gap-x-2'>
                        <Icon><FaLocationDot className='self-center w-full h-full'/> </Icon>
                        <span className='text-[10px] sm:text-[16px] self-center'><SingleListItem text={"225 Marion Street, Columbia"}/></span>
                    </p>
                </div>
            </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center md:justify-between px-[10%] pb-10 font-medium bg-black'>
            <div className='self-center text-[12px] sm:text-[16px]'>Copyright © 2024 ThemeJunction. All Rights Reserved.</div>
            <div className='flex  gap-x-5 self-center text-[12px] sm:text-[16px]'>
                <SingleListItem text={"Privacy Policy"}/>
                <SingleListItem text={"Terms & Conditions"}/>
            </div>
        </div>
    </div>
  )
}
