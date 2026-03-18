import { useFrame } from '@react-three/fiber'
import { useState, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import type { GLTF } from 'three-stdlib'
import { useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import modelPath from "../models/robotic_cat2.glb"
import "./Model.css"

type GLTFResult = GLTF & {
    scene: THREE.Group
}


const Model = () => {
    const [canvasActive, setCanvasActive] = useState(false)

    const Scene = () => {
    const ref = useRef<THREE.Group>(null!)
    const gltf = useGLTF(modelPath) as GLTFResult

    useEffect(() => {
        gltf.scene.traverse((child: THREE.Object3D) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true 
            }
            if (child instanceof THREE.Mesh) {
                const mat = child.material as THREE.MeshStandardMaterial
                if (mat.name === 'plastic') {
                    mat.color.set('#c2d2d2') 
                    mat.roughness = 0.4
                    mat.metalness = 0.1
                }
                if (mat.name === 'plastic.001') {
                    mat.color.set('#0B2918') 
                    mat.roughness = 0.8
                }
                if (mat.name === 'Metal') {
                    mat.color.set('#b0c0c0')
                    mat.metalness = 0.5 
                    mat.roughness = 0.15
                }
                if (mat.name === 'eyes') {
                    mat.color.set('#222')   
                    mat.emissive.set('#331523')
                    mat.emissiveIntensity = 0.4
                }
            }
        })
    }, [gltf])

    useFrame(() => {
        ref.current.rotation.y += 0.005
    })

    return (
        <group ref={ref} scale={0.027} position={[0, -1, 0]}>
            <primitive object={gltf.scene} />
        </group>
    )
}

    return (
        <div 
            className={`model-wrap ${canvasActive ? 'active' : ''}`}
            onClick={() => {
                setCanvasActive(true)
                setTimeout(() => setCanvasActive(false), 5000)
            }}
            onMouseLeave={() => setCanvasActive(false)}
        >
            {canvasActive && (
                <p className="model-hint">Scroll to zoom</p>
            )}
            <Canvas 
                shadows
                onCreated={({ gl }) => {
                    gl.shadowMap.enabled = true
                    gl.shadowMap.type = THREE.PCFSoftShadowMap
                }}
                camera={{ position: [0, 0, 11] }}
            >
                <ambientLight intensity={0.8}/>
                <directionalLight 
                    position={[5, 5, 5]} 
                    intensity={4} 
                    color="#ffffff"
                    castShadow
                    shadow-mapSize={[1024, 1024]}
                    shadow-radius={50}
                    shadow-camera-far={50}
                    shadow-camera-near={0.1}
                />
                <directionalLight position={[-5, 2, -5]} intensity={0.7} color="#8888ff" />
                <Scene />
                
                {/* floor*/}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
                    <planeGeometry args={[20, 20]} />
                    <shadowMaterial opacity={0.4} />
                </mesh>
                
                <OrbitControls enableZoom={canvasActive} />
            </Canvas>
        </div>
    )
}

export default Model