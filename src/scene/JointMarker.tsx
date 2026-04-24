import { Html } from '@react-three/drei'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'
import { useApp } from '../store'
import type { JointId, Side } from '../types'

interface Props {
  jointId: JointId
  jointName: string
  side: Side
  position: [number, number, number]
}

export function JointMarker({ jointId, jointName, side, position }: Props) {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const selected = useApp((s) => s.selectedJoint === jointId)
  const setSelectedJoint = useApp((s) => s.setSelectedJoint)
  const setGus = useApp((s) => s.setGus)

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime
    const base = selected ? 1.25 : hovered ? 1.1 : 1
    const pulse = selected ? 1 + 0.08 * Math.sin(t * 4) : 1
    const s = base * pulse
    meshRef.current.scale.set(s, s, s)
  })

  const color = selected ? '#ffd166' : hovered ? '#ffb779' : '#ff8d3a'

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
          setHovered(false)
          document.body.style.cursor = ''
        }}
        onPointerDown={(e) => {
          e.stopPropagation()
          setSelectedJoint(jointId)
          setGus('happy', `Let's look at the ${jointName.toLowerCase()}.`)
        }}
      >
        <sphereGeometry args={[0.09, 20, 20]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={selected ? 0.9 : 0.5} />
      </mesh>
      {(hovered || selected) && (
        <Html
          distanceFactor={8}
          style={{
            pointerEvents: 'none',
            transform: 'translate(8px, -14px)',
          }}
        >
          <div
            style={{
              background: 'rgba(0,0,0,0.72)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '3px 8px',
              borderRadius: 8,
              color: '#fff',
              fontSize: 12,
              whiteSpace: 'nowrap',
            }}
          >
            {jointName} ({side})
          </div>
        </Html>
      )}
    </group>
  )
}
