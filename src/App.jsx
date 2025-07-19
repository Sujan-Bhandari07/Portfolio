import React, { useEffect, useRef } from 'react'



import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Computer from './components/Computer';
import Overview from './components/Overview';
import Workexp from './components/Workexp';
import Projects from './components/Projects';
import Footer from './components/Footer';




import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
gsap.registerPlugin(ScrollTrigger,ScrollSmoother);





const App = () => {

  // useEffect(() => {
    
  //   const smooth = ScrollSmoother.create({
  //     wrapper:".wrappers",
  //     content:".contents",
  //     smooth:3,
  //     smoothTouch:.1,
  //     // effects:true
  //   })
  
  //   return () => {
  //     if(smooth){
  //       smooth.kill()
  //     }
      
  //   }
  // }, [])
  
  




  return (
    <div className="wrappers">
      <div className="contents">




< Navbar  />
<Intro />
<Computer />
<Overview />
<Workexp />
<Projects />
<Footer />
    </div>
</div>

  )
}

export default App

