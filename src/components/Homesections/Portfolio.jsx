import React from 'react'
import { Mainheading } from '../basicscommon/Mainheading'
import { Subheading } from '../basicscommon/Subheading'
import { PortfolioWork } from '../box/PortfolioWork'
import { PortfolioNav } from '../basicscommon/PortfolioNav'

export const Portfolio = () => {
  return (
    <div>
      <div className='flex flex-col gap-y-8 p-14 sm:p-24 h-fit'  data-aos="fade-up">

        <div >
          <Mainheading Maintext={"Portfolio"}/>
        </div>

        <div className='flex lg:justify-between justify-start flex-col lg:flex-row gap-y-8'>

          <div className='lg:w-[50%]'>
            <Subheading Subheadtext={"Our Latest Work For Our Best Customer"}/>
          </div>

          <div className='w-fit flex gap-x-3 sm:gap-x-7 lg:self-end self-center font-bold sm:text-lg'>
              <PortfolioNav text={"All"}/>
              <PortfolioNav text={"Business Consulting"}/>
              <PortfolioNav text={"UI Design"}/>
              <PortfolioNav text={"Website Design"}/>
          </div>
        </div>
        
        <div className='flex gap-x-5 w-full flex-col sm:flex-row'>
          
          <div className='sm:w-[50%] h-fit flex flex-col'>
            <div className='sm:h-[600px]'>
              <PortfolioWork title={"Paid Media Solutions"} subTitle={"Business Consulting"}/>
            </div>
            <div className='sm:h-[400px]'>
              <PortfolioWork title={"Cyber Security Management"} subTitle={"Business Consulting"}/>
            </div>
          </div>

          <div className='sm:w-[50%] h-fit flex flex-col-reverse gap-y-8'>
            <div className='sm:h-[600px]'>
              <PortfolioWork title={"IT Project Management"} subTitle={"UI Design"}/>
            </div>
            <div className='sm:h-[400px]'>
              <PortfolioWork title={"Data Backup & Recovery"} subTitle={"Website Design"}/>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}
