import React from 'react'
import '../styles/Projects.css'
import Age from '../assets/Age.PNG'
import Animated from '../assets/Animated.PNG'
import Quote from '../assets/Quote.PNG'
import Github from '../assets/Github.png'


function Pcards({img,title,desc,o,t,tt}){
    return(
        <div className="pcards">
            <div className="img">
                <img className="scimg" src={img} alt="" />
            </div>
            <h4>{title}</h4>
            <p className='desc'>{desc}</p>
            <img className="github" src={Github} alt="" />
            <div className="has">
                <p>{o}</p>
                <p>{t}</p>
                <p>{tt}</p>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <div className="projects">
            <div className="protop">
                <p>MY WORK</p>
                <h2>PROJECTS.</h2>
                <p>Following projects showcases my skills and experience through real world example of my work.Each project is made within the exp. of a half year withlive demos.althogh i'm learner  it reflects my ability to solve problem.</p>
            </div>
            <div className="cardss">
                <Pcards o="#GSAP" t="#scrollTrigger" tt="#animation" img={Animated} title="Animated Website" desc= "“A visually rich, interactive website powered by GreenSock (GSAP). Feature  scroll-triggered animations, smooth element transitions, , and timeline choreography—enhancing UX and performance across modern browsers.”"/>
                <Pcards o="#api" t="#age" tt="#res" img={Age} title="Age calc" desc="“Developed a sleek age‑calculator that fetches accurate age data via a REST API. Validates birthdate input, displays age in years/months/days instantly, with clear error handling and responsive design.”"/>
                <Pcards o="#api" t="#res" tt="#quote" img={Quote} title="Quote gen." desc="“Built a dynamic quote generator using fetch to call a public quotes API. Displays random inspirational quotes with author attribution on button click, ensuring smooth interaction and simple UI.”"/>

               

    

            </div>
        </div>
    )
}

export default Projects