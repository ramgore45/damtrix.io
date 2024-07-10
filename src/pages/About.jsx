import React from 'react'
import { AboutusSection } from '../components/commonsections/AboutusSection'
import { Testimonials } from '../components/commonsections/Testimonials'
import { GetInTouch } from '../components/commonsections/GetInTouch'
import { Footer } from '../components/commonsections/footer/Footer'
import { Navigation } from '../components/box/Navigation'

export const About = () => {
  return (
    <div className='bg-black w-full'>
        {/* common things- aboutUS, testimonials, get in touch */}
        <div >
            <Navigation page={"About Us"}/>
        </div>
        
        <div className='w-full'>
          <AboutusSection/>
        </div>

        <div>
          <Testimonials/>
        </div>
        <div>
          <GetInTouch/>
        </div>
      
        <div>
          <Footer/>
        </div>
       
    </div>
  )
}
