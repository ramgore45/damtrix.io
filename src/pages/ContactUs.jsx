import React from 'react'
import { GetInTouch } from '../components/commonsections/GetInTouch'
import { Latestblogs } from '../components/commonsections/Latestblogs'
import { Footer } from '../components/commonsections/footer/Footer'
import { Navigation } from '../components/box/Navigation'

export const ContactUs = () => {

  return (
    <div className='bg-black'>
        {/* Navigation Path */}
        
        <div>
            <Navigation page={"Contact Us"} />
        </div>
        
        <div>
            <GetInTouch/>
        </div>
    
        <div>
            <Latestblogs/>
        </div>
    
        <div>
            <Footer/>
        </div>
        
    </div>
  )
}
