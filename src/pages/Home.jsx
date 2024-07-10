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

export const Home = () => {
  return (
    <div className='bg-black '>

        <div >
            <Creativethinking/>
        </div>

        <div>
            <AboutusSection/>
        </div>
        
        <div >
            <ReachofWebsites/>
        </div>
    
        <div>
            <Ourservices/>
        </div>
    
        <div >
            <Testimonials/>
        </div>
    
        <div >
            <Howwework/>
        </div>
    
        <div>
            <Portfolio/>
        </div>
    
        <div>
            <FAQ/>
        </div>
    
        <div >
            <Latestblogs/>
        </div>
    
        <div>
            <GetInTouch/> 
        </div>
    
        <div >
            <Footer/>
        </div>
        
    </div>
  )
}
