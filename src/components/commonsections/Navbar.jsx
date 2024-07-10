import React from 'react'
import { Companylogo } from '../basicscommon/Companylogo'
import { matchPath, NavLink, useLocation } from 'react-router-dom'

const homeList = [
    {name:" Home 01",},{name:" Home 02",},{name:" Home 03",},{name:" Home 04",},{name:" Home 05",},
    {name:" Home 06",},{name:" Home 07",},{name:" Home 08",},{name:" Home 09",},{name:" Home 10",},
]

export const Navbar = () => {

    const location = useLocation()
    console.log(location)

    const matchroute = (route)=>{
        console.log(route)
        return matchPath({path:route} ,location.pathname)
    }

  return (
    <div className='h-fit font-medium'>
        <div className='h-full flex justify-between p-2 sm:p-4 md:px-10 lg:px-24 content-center'>
            {/* company icon */}
            <NavLink to='/'>
                <Companylogo/>
            </NavLink>
            

            {/* pages section */}
            <div className='flex gap-x-2 sm:gap-x-4 self-center'>
                    <div className='cursor-pointer group'>
                        <NavLink to={`/`}>
                            <p className={`${matchroute('/')? 'text-green-400':''} texthover flex `}>
                                        Home<sup className='self-center'>+</sup>
                            </p>
                        </NavLink>
                        <ul className='w-40 md:w-60 p-5 invisible absolute group-hover:visible bg-white text-black  flex flex-col gap-y-2 border-t-4 border-green-600'>
                            {
                                homeList.map((item)=>(
                                    <li className='texthover transition ease-in-out duration-300 hover:translate-x-5'>{item.name}</li>
                                ))
                            }
                        </ul>
                            
                    </div>

                    <div className='cursor-pointer hover:text-green-400 '>
                        <NavLink to={`/aboutus`}>
                            <p className={`${matchroute('/aboutus')? 'text-green-400':''} flex`}>
                                About
                            </p>
                        </NavLink>
                    </div>
            </div>

            {/* ContactUs btn */}
            <div className='self-center'>
                <NavLink to='/contactus'>
                    <button className='border border-green-300 p-1 md:p-3 md:px-6 rounded-full from-blue-600 to-violet-600 transition ease-in duration-500
                            hover:bg-gradient-to-r hover:transition-all hover:border-none'
                    >
                        Contact Us
                    </button>
                </NavLink>
                
            </div>
        </div>
    </div>
  )
}
