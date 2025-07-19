import { Loader, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import '../styles/Computer.css'




const Computer = () => {

    function Model(){
        const {scene}=useGLTF("/computer.glb")

        return(
            <primitive object={scene}  position={[2,0,0]}/>
        )

    }

  return (
<div className="computer">
<Canvas camera={{ position: [-.5, 5, 8], fov: 50 }}>
  {/* Soft ambient light for overall illumination */}
  <Suspense fallback={null}>

  <ambientLight intensity={0.5} />
  {/* Key light from the front-right */}
  <directionalLight
    position={[5, 10, 5]}
    intensity={1.2}
    castShadow
    shadow-mapSize-width={1024}
    shadow-mapSize-height={1024}
    />
  {/* Fill light from the left */}
  <directionalLight
    position={[-5, 2, 2]}
    intensity={0.5}
    color="#b0e0e6"
    />
  {/* Subtle back light for rim effect */}
  <directionalLight
    position={[0, 5, -5]}
    intensity={0.4}
    color="#fff8e1"
    />
  {/* Soft ground contact shadow */}
  <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.8, 0]}>
    <planeGeometry args={[20, 20]} />
    <shadowMaterial opacity={0.2} />
  </mesh>
  <OrbitControls
    enableZoom={false}
    minPolarAngle={Math.PI / 2}
    maxPolarAngle={Math.PI / 2}
    target={[0, 2, 0]}
    />
  <Model />
    </Suspense>
</Canvas>
<Loader />
<div className="go">
    <div className="innergo">
    <div className="point"></div>
    </div>
   
</div>
</div>
  )
}

export default Computer