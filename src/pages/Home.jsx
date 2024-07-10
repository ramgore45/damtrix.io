import React from 'react'
import { AboutusSection } from '../components/commonsections/AboutusSection'
import { Testimonials } from '../components/commonsections/Testimonials'
import { GetInTouch } from '../components/commonsections/GetInTouch'
import { Latestblogs } from '../components/commonsections/Latestblogs'
import { Creativethinking } from '../components/Homesections/Creativethinking'
import { Ourservices } from '../components/Homesections/Ourservices'
import { Howwework } from '../components/Homesections/Howwework'
import { FAQ } from '../components/Homesections/FAQ'
import { Portfolio } from '../components/Homesections/Portfolio'
import { Footer } from '../components/commonsections/footer/Footer'
import { ReachofWebsites } from '../components/Homesections/ReachofWebsites'
import ScrollAnimation from 'react-animate-on-scroll';

export const Home = () => {
  return (
    <div className='bg-black '>
        <div>
            <Creativethinking/>
        </div>

        <div>
            <AboutusSection/>
        </div>
        
        <ScrollAnimation animateIn="fadeIn " >
            <div>
                <ReachofWebsites/>
            </div>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeIn " >
            <div>
                <Ourservices/>
            </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn " >
            <div>
                <Testimonials/>
            </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn " >
            <div>
                <Howwework/>
            </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn " >
            <div>
                <Portfolio/>
            </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn " >
            <div>
                <FAQ/>
            </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn " >
            <div>
                <Latestblogs/>
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
