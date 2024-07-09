import React from 'react'
import { AboutusSection } from '../components/commonsections/AboutusSection'
import { Testimonials } from '../components/commonsections/Testimonials'
import { GetInTouch } from '../components/commonsections/GetInTouch'
import { Footer } from '../components/commonsections/footer/Footer'
import { Navigation } from '../components/box/Navigation'
import ScrollAnimation from 'react-animate-on-scroll'

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

        <ScrollAnimation animateIn="fadeIn " >
          <div>
            <Testimonials/>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn " >
          <div>
            <GetInTouch/>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn " >
          <div>
            <Footer/>
          </div>
        </ScrollAnimation>

        

    </div>
  )
}
