import React from 'react'
import { GetInTouch } from '../components/commonsections/GetInTouch'
import { Latestblogs } from '../components/commonsections/Latestblogs'
import { Footer } from '../components/commonsections/footer/Footer'
import { Navigation } from '../components/box/Navigation'
import ScrollAnimation from 'react-animate-on-scroll'

export const ContactUs = () => {

  return (
    <div className='bg-black'>
        {/* Navigation Path */}
        
        <div>
            <Navigation page={"Contact Us"} />
        </div>

        <ScrollAnimation animateIn="fadeIn " >    
            <div>
                <GetInTouch/>
            </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn " >
            <div>
                <Latestblogs/>
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
