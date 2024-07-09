import React from 'react'
import { SlSocialInstagram } from 'react-icons/sl'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'

export const Teammember = () => {
  return (
    <div >
        <div className='h-fit w-[250px] lg:w-fit  relative flex justify-center content-center group'>
            <div className='h-fit  rounded-xl relative z-10'>
                <img className='h-[300px] w-[250px] md:h-80 md:w-100 w-fit rounded-xl group-hover:scale-105 transition duration-500 ease-in-out'
                    src='https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
                />
            </div>
            <div className='text-white h-48 lg:h-60 w-48 lg:w-60 flex rounded-full bg-violet-500 bg-opacity-60 absolute lg:top-10 top-14 z-0 scale-0
                    group-hover:scale-100 group-hover:z-20 transition ease-in-out duration-500 
            '>
                <div className='mx-auto my-auto h-fit w-fit gap-y-4 flex flex-col'>
                    <div >
                        <p className='font-bold text-lg'>John Doey</p>
                        <p className='font-semibold'>Co-Founder</p>
                    </div>
                    <div className='flex bg-white w-fit mx-auto rounded-full px-4 py-2 text-black'>
                        <TiSocialFacebook className='h-8 w-8 px-1 border-r rounded-l-full'/>
                        <SlSocialInstagram className='h-8 w-8 px-1 border-x '/>
                        <TiSocialTwitter className='h-8 w-8 px-1 border-x'/>
                        <TiSocialLinkedin className='h-8 w-8 px-1 border-l rounded-r-full' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
