import React, { useRef } from 'react'
import '../styles/Workexp.css'
import gsapi from '../assets/gsap.avif'
import web from '../assets/web.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'




function Experience({title,position}){
const expref = useRef()
    useGSAP(()=>{
gsap.from(expref.current,{
    opacity:0,
    duration:.5,
    x: position === "left" ? "-50px":"50px",
    scrollTrigger:{
        trigger:expref.current,
        // markers:true,
        start:"top 300px",
        end:"+=100px",

    }
})
    },[])
    return(
        <div ref={expref} className = {`experiences ${position}`}>
            <div className="exptop">

            <h4>{title}</h4>
            <p>starbucks</p>
            </div>
            <ul className='ul'>
                <li>Designed & built interactive UI components using React (with Hooks, Context API or Redux) for apps like quote generators and age calculators—emphasizing clean state management and reusable code.</li>
                <li>Integrated API-driven features, e.g. fetching quotes from public APIs, validating form inputs, handling async errors—all ensuring seamless UX and data consistency.</li>
                <li>Crafted immersive animations using GSAP and Three.js—adding scroll-triggered effects, background 3D scenes, and dynamic hover states to bring your projects to life.</li>
                <li>Optimized performance & responsiveness: implemented lazy-loading, code-splitting, memoization, and mobile-first responsive design for fast-loading, smooth experiences.</li>
            </ul>
        </div>

    )
}

function Workside({img,css}){
    const imgref = useRef()
    useGSAP(()=>{
        gsap.from(imgref.current,{
            opacity:0,
            duration:.5,
            
            scrollTrigger:{
                trigger:imgref.current,
                // markers:true,
                start:"top 550px",
                end:"+=100px",
        
            }
        })
            },[])

    return(

        <div className="workside">
<div className="topbar"></div>
<img ref={imgref} className ={`${css}`} src={img} alt="" />
<div className="bottombar"></div>
    </div>
    )
}







const Workexp = () => {
  return (
<div className="workexp">
    <div className="top">
        <p>WHAT I HAVE DONE SO FAR</p>
        <h2>Work Experience.</h2>
    </div>
    <div className="ex">

    
    <Experience title="React Js Developer" position="left"/>
    <Workside img={web}/>
   
    </div>
    <div className="ex">
    <Experience title="React Js Developer" position="right"/>
    <Workside css="gsapi" img={gsapi} />
    </div>
    <div className="ex">
    <Experience title="React Js Developer" position="left"/>
    <Workside img="https://core.nexus/wp-content/uploads/2018/06/ThreeJS-Icon.png"/>
    </div>
    <div className="ex">
    <Experience title="React Js Developer" position="right"/>
    <Workside img="/logo.png" />
    </div>


</div>

  )
}

export default Workexp