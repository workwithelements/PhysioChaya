import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { HumanModel } from './HumanModel'

export function BodyScene() {
  return (
    <Canvas shadows camera={{ position: [2.2, 1.2, 3.6], fov: 38 }}>
      <color attach="background" args={['#0d1529']} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1.1} castShadow />
      <directionalLight position={[-3, 2, -2]} intensity={0.35} color="#8faefc" />
      <HumanModel />
      <OrbitControls
        enablePan={false}
        minDistance={2.4}
        maxDistance={7}
        target={[0, 0.4, 0]}
        maxPolarAngle={Math.PI * 0.85}
      />
    </Canvas>
  )
}
