import { useFrame } from '@react-three/fiber'
import { useState, useRef, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import type { GLTF } from 'three-stdlib'
import { useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import modelPath from '../../models/futuristic_robotic_guard_dog-v4.glb'
import '../Model.css'
import '../ShopItem.css'

type GLTFResult = GLTF & {
    scene: THREE.Group
}

type RamboModalProps = {
    className?: string
}

const FixedLights = () => {
    const { camera } = useThree()
    const lightRef = useRef<THREE.DirectionalLight>(null!)

    useFrame(() => {
        lightRef.current.position.copy(camera.position)
    })

    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight 
                ref={lightRef} 
                intensity={1.2} 
                color='#ffffff' 
                castShadow 
                shadow-mapSize={[1024, 1024]} 
                shadow-radius={50}
                shadow-camera-far={50}
                shadow-camera-near={0.1}
            />
            <directionalLight position={[-5, 2, -5]} intensity={0.7} color='#8888ff' />
        </>
    )
}

const Scene = () => {
    const ref = useRef<THREE.Group>(null!)
    const gltf = useGLTF(modelPath) as GLTFResult

    useEffect(() => {
        gltf.scene.traverse((child: THREE.Object3D) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
                const mat = child.material as THREE.MeshStandardMaterial
                mat.map = null
                mat.roughness = 0.5
                mat.metalness = 0.8
                mat.needsUpdate = true
                mat.color.set('#848789')

            }
        })
    }, [gltf])

    useFrame(() => {
        ref.current.rotation.y += 0.005
    })

    return (
        <group ref={ref} scale={4} position={[0, -1.5, 0]}>
            <primitive object={gltf.scene} />
        </group>
    )
}

const RamboModal = ({ className }: RamboModalProps) => {
    const [canvasActive, setCanvasActive] = useState(false)
    const [visible, setVisible] = useState(false)
    const wrapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true)
            } else {
                setTimeout(() => setVisible(false), 1000)
            }
        }, { threshold: 0.1 })
        if (wrapRef.current) observer.observe(wrapRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={wrapRef}
            className={`model-wrap ${canvasActive ? 'active' : ''}`}
            onClick={() => {
                setCanvasActive(true)
                setTimeout(() => setCanvasActive(false), 5000)
            }}
            onMouseLeave={() => setCanvasActive(false)}
        >
            {canvasActive && (
                <p className='model-hint'>Scroll to zoom</p>
            )}
            {visible && (
                <Canvas
                    className={`shop-model ${className ?? ''}`}
                    gl={{ powerPreference: 'low-power', antialias: false }}
                    id='shop-model'
                    shadows
                    onCreated={({ gl }) => {
                        gl.shadowMap.enabled = true
                        gl.shadowMap.type = THREE.PCFShadowMap
                    }}
                    camera={{ position: [0, 0, 11] }}
                >
                    <FixedLights />
                    <Scene />

                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
                        <planeGeometry args={[20, 20]} />
                        <shadowMaterial opacity={0.4} />
                    </mesh>

                    <OrbitControls enableZoom={canvasActive} />
                </Canvas>
            )}
        </div>
    )
}

export default RamboModal