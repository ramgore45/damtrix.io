import React from 'react'
import { Companylogo } from '../basicscommon/Companylogo'
import { matchPath, NavLink, useLocation } from 'react-router-dom'

const navItems = [
    {
        page:'Home',
        path:'/',
    },
    {
        page:'About Us',
        path:'/aboutus',
    }
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
                {
                    navItems.map((item)=>(
                        <div key={item.index} className='cursor-pointer'>
                            <NavLink to={item.path}>
                                <p className={`${matchroute(item.path)? 'text-green-400':''} texthover`}>
                                        {item.page}
                                </p>
                            </NavLink>
                        </div>
                    ))
                }
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
