import React from 'react'
import { Mainheading } from '../basicscommon/Mainheading'
import { Subheading } from '../basicscommon/Subheading'
import { Description } from '../basicscommon/Description'
import { Btn } from '../basicscommon/Btn'
import { Teammember } from '../box/Teammember'
const teamData = [
  {
    name:"John Doey",
    designation:"Co-Founder",
  },
  {
    name:"James Bond",
    designation:"Web Developer",
  },
  {
    name:"Jacky Chan",
    designation:"Web Design",
  },
  {
    name:"Tom Mathew",
    designation:"CEO",
  },
]

export const Howwework = () => {
  return (
    <div>
      <div>
        <div className='flex flex-col text-center justify-center gap-y-8 bg-gradient-to-r from-green-100 to-gray-50 p-14 sm:p-24 text-black'>
            <div className='self-center'>
                <Mainheading Maintext={"How We Work"}/>
            </div>

            <div>
                <Subheading Subheadtext={"Meet Our Team"}/>
            </div>

            <div className='self-center' >
                <Description>
                    <p className='sm:w-[700px]'>
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
                    </p>
                </Description>
            </div>

            <div className='flex gap-x-8 flex-wrap lg:flex-nowrap justify-center gap-y-8'>
                {
                  teamData.map((item)=>(
                    <div key={item.index}>
                      <Teammember name={item.name} designation={item.designation}/>
                    </div>
                  ))
                }
            </div>

            <div className='w-fit self-center'>
              <Btn Btntext={"View All"}/>
            </div>
        </div>
      </div>
    </div>
  )
}
