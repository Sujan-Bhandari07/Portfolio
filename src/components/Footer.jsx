import React, { useState } from 'react';
import '../styles/Footer.css';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, Stars, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';




function MovingStars(props) {
    const group = useRef();
    useFrame((state, delta) => {
        if (group.current) {
            group.current.rotation.y += 0.01 * delta; // Adjust speed as needed
            group.current.rotation.x += 0.002 * delta; // Optional: slight x rotation
        }
    });
    return (
        <group ref={group}>
            <Stars {...props} />
        </group>
    );
}
function Model() {

    const modelref = useRef()

    useFrame((state, delta) => {
        //  modelref.current.rotation.z += -delta
        modelref.current.rotation.y += delta * .5
        //  modelref.current.rotation.x+= delta
    })

    const { scene } = useGLTF("/earth.glb");
    return (
        <primitive ref={modelref} object={scene} scale={[35, 35, 35]} position={[30, 0, 0]} />
    );
}

const Footer = () => {

    const sendref = useRef()


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    return (
        <div className="footer-canvas-container" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            <Canvas
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    background: '#000',
                }}
                camera={{ position: [30, 0, 40], fov: 75 }}
            >

                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <MovingStars
                    radius={100}
                    depth={50}
                    count={200}
                    factor={8}
                    saturation={0}
                    fade
                />
                <Html className='html'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setEmail('');
                        setName('');
                        setMessage('');
                        gsap.to(
                          sendref.current,

                          {opacity:1}
                        );
                    }}>
                        <p>GET IN TOUCH</p>
                        <h2>CONTACT.</h2>
                        <div className="box">
                            <label className='label' htmlFor=" Name">Your Name</label>
                            <input value={name} className='input' required type="text" placeholder="What's your name ?" id=' Name' onChange={(e) => {
                                setName(e.target.value)
                            }} />
                            <label className='label' htmlFor=" email">Your Email</label>
                            <input value={email} className='input' required type="email" placeholder="What's your Email ?" id=' email' onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                            <label className='label' htmlFor=" message">Your Message</label>
                            <textarea value={message} rows={4} className='input' required type="text" placeholder="What do you want to say ?" id=' message' onChange={(e) => {
                                setMessage(e.target.value)
                            }} ></textarea>
                            <button type='Submit'>Send</button>
                            <div
                              ref={sendref}
                              className="send"

                            >
                              Message sent
                            </div>
                        </div>

                    </form>
                </Html>
                <Model />
            </Canvas>
        </div>
    );
};

export default Footer;



