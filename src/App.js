import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/commonsections/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ContactUs } from './pages/ContactUs';
import './App.css';
import "animate.css/animate.compat.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[ ])

  return (
    <div className=" bg-black text-white h-fit w-screen ">
      {/* dmatrix.com */}
      <div className='fixed top-0 w-screen  bg-black z-20'>
        <Navbar/>
      </div>
      
      <div className='relative pt-24 z-10 w-screen  right-0 left-0 bg-black'>
        
        {
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutus' element={<About/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
          </Routes>
        }

      </div>

    </div>
  );
}

export default App;
