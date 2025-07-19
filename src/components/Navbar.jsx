import React, { useRef } from 'react'
import '../styles/Navbar.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'



const Navbar = () => {


    const navref = useRef()

useGSAP(()=>{
    gsap.to(navref.current,{
    backgroundColor:"black",
    duration:.1,
    ease:"none",
    scrollTrigger:{
        trigger:navref.current,
        // markers:true,
        start:"top top",
        end:"+=100px",
        scrub:3
    }
    })
},[])

  return (
<div  ref={navref} className="navbar">
    <div className="navleft">
        <div className="logo">
            <img src="\logo.png" alt="Logo" />
        </div>
        <div className="logoname">Sujan    <span>ك </span> </div>
    </div>
    <div className="navright">
        <ul>
            <li>about</li>
            <li>work</li>
            <li>contact</li>
        </ul>
    </div>
</div>
  )
}

export default Navbar