import React from 'react'
import { Mainheading } from '../basicscommon/Mainheading'
import { Subheading } from '../basicscommon/Subheading'
import { Description } from '../basicscommon/Description'
import { Blog } from '../box/Blog'
const blogHeadings = [
  {
    heading:"Simple Proctives that will help you get better every...",
  },
  {
    heading:"This Place Really Place For Awesome Moment",
  },
  {
    heading:"Frigilla leactus honcus anteom mode vehicul",
  },
]

export const Latestblogs = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col text-center justify-center gap-y-8 bg-gradient-to-r from-indigo-100 to-blue-50 p-14 sm:p-24 text-black'>

        <div className='self-center'>
          <Mainheading Maintext={"Latest Blogs"}/>
        </div>
        
        <div>
          <Subheading Subheadtext={"Latest Blogs Posts"}/>
        </div>
       
        <div className='self-center' >
          <Description>
            <p className='md:w-[700px]'>
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
            </p>
          </Description>
        </div>
        
        {/* Blog Posts */}
        <div className='flex gap-x-7 gap-y-7 lg:flex-row lg:flex-nowrap flex-wrap'>
          {
            blogHeadings.map((item)=>(
              <Blog heading={item.heading}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
