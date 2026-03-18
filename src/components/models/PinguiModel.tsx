import { useFrame, useThree } from '@react-three/fiber'
import { useState, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import type { GLTF } from 'three-stdlib'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { Mesh, MeshStandardMaterial, DirectionalLight, Group, Object3D, PCFShadowMap } from 'three'
import modelPath from '../../models/weathered_penguin-bot-v2.glb'
import '../Model.css'
import '../ShopItem.css'

type GLTFResult = GLTF & {
    scene: Group
}

type PinguiModelProps = {
    className?: string
}

const FixedLights = () => {
    const { camera } = useThree()
    const lightRef = useRef<DirectionalLight>(null!)

    useFrame(() => {
        lightRef.current.position.copy(camera.position)
    })

    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight
                ref={lightRef}
                intensity={2.5}
                color='#ffffff'
                castShadow
                shadow-mapSize={[1024, 1024]}
                shadow-radius={50}
                shadow-camera-far={50}
                shadow-camera-near={0.1}
            />
            <directionalLight position={[-5, 2, -5]} intensity={1} color='#444466' />
        </>
    )
}

const Scene = () => {
    const ref = useRef<Group>(null!)
    const gltf = useGLTF(modelPath) as GLTFResult

    useEffect(() => {
        gltf.scene.traverse((child: Object3D) => {
            if (child instanceof Mesh) {
                child.castShadow = true
                child.receiveShadow = true
                const mat = child.material as MeshStandardMaterial
                mat.roughness = 1
                mat.metalness = 0
                mat.color.set('#bbb')
                mat.needsUpdate = true
            }
        })
    }, [gltf])

    useFrame(() => {
        ref.current.rotation.y += 0.005
    })

    return (
        <group ref={ref} scale={0.72} position={[0, -1.5, 0]}>
            <primitive object={gltf.scene} />
        </group>
    )
}

const PinguiModel = ({ className }: PinguiModelProps) => {
    const [canvasActive, setCanvasActive] = useState(false)
    const [visible, setVisible] = useState(false)
    const wrapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setVisible(true)
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
                        gl.shadowMap.type = PCFShadowMap
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

export default PinguiModel
