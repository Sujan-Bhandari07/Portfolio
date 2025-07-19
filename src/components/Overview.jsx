import React from 'react'
import '../styles/Overview.css'
import web from '../assets/web.jpg'
import gsapi from '../assets/gsap.avif'


  export function Cards({img,title}){

    


    return(
        <>
        <div className="cards">
            <div className="img">

            <img src={img} alt="" />
            </div>
            <h6>{title}</h6>

        </div>
        </>
    )
}

const Overview = () => {
  return (
<div className="overview">
    <div className="overtop">

    <p>Introduction</p>
    <h2>Overview.</h2>
    <p className="desc">I am a learner begginer with semester of experience in JS <br />and learning the framework React JS,Three JS,GSAP.</p>
    </div>
    <div className="overbottom">
        <Cards img={web} title="Web developer"/>
        <Cards img={gsapi} title="GSAP"/>
        <Cards img={"https://core.nexus/wp-content/uploads/2018/06/ThreeJS-Icon.png"} title="Three js"/>
    </div>
    
</div>

  )
}

export default Overview