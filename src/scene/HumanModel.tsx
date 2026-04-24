import { JOINTS } from '../data/joints'
import { JointMarker } from './JointMarker'

// Primitive humanoid built from capsules and spheres. Coordinates are in metres-ish units.
// The model is centred roughly at hip height = 0. Head at +2.1y, feet near -2.0y.
export function HumanModel() {
  const skin = '#e6ccb3'
  const skinDark = '#c9a88a'
  const hair = '#3b2a22'

  return (
    <group>
      {/* Head */}
      <mesh position={[0, 2.0, 0]} castShadow>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshStandardMaterial color={skin} roughness={0.7} />
      </mesh>
      {/* Hair cap */}
      <mesh position={[0, 2.14, -0.02]} castShadow>
        <sphereGeometry args={[0.29, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2.2]} />
        <meshStandardMaterial color={hair} roughness={0.85} />
      </mesh>
      {/* Neck */}
      <mesh position={[0, 1.68, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.18, 20]} />
        <meshStandardMaterial color={skinDark} roughness={0.8} />
      </mesh>
      {/* Torso */}
      <mesh position={[0, 1.1, 0]} castShadow>
        <boxGeometry args={[0.82, 0.95, 0.4]} />
        <meshStandardMaterial color="#3a6ea5" roughness={0.75} />
      </mesh>
      {/* Pelvis */}
      <mesh position={[0, 0.45, 0]} castShadow>
        <boxGeometry args={[0.7, 0.38, 0.38]} />
        <meshStandardMaterial color="#26426b" roughness={0.75} />
      </mesh>
      {/* Shoulders (rounded) */}
      <mesh position={[0.45, 1.48, 0]}>
        <sphereGeometry args={[0.15, 24, 24]} />
        <meshStandardMaterial color="#3a6ea5" roughness={0.75} />
      </mesh>
      <mesh position={[-0.45, 1.48, 0]}>
        <sphereGeometry args={[0.15, 24, 24]} />
        <meshStandardMaterial color="#3a6ea5" roughness={0.75} />
      </mesh>

      {/* Arms: upper */}
      <mesh position={[0.58, 1.26, 0]} rotation={[0, 0, Math.PI / 14]}>
        <capsuleGeometry args={[0.095, 0.5, 6, 16]} />
        <meshStandardMaterial color={skin} roughness={0.7} />
      </mesh>
      <mesh position={[-0.58, 1.26, 0]} rotation={[0, 0, -Math.PI / 14]}>
        <capsuleGeometry args={[0.095, 0.5, 6, 16]} />
        <meshStandardMaterial color={skin} roughness={0.7} />
      </mesh>
      {/* Arms: lower */}
      <mesh position={[0.72, 0.82, 0]} rotation={[0, 0, Math.PI / 14]}>
        <capsuleGeometry args={[0.085, 0.46, 6, 16]} />
        <meshStandardMaterial color={skin} roughness={0.7} />
      </mesh>
      <mesh position={[-0.72, 0.82, 0]} rotation={[0, 0, -Math.PI / 14]}>
        <capsuleGeometry args={[0.085, 0.46, 6, 16]} />
        <meshStandardMaterial color={skin} roughness={0.7} />
      </mesh>
      {/* Hands */}
      <mesh position={[0.88, 0.47, 0]}>
        <sphereGeometry args={[0.1, 20, 20]} />
        <meshStandardMaterial color={skinDark} roughness={0.75} />
      </mesh>
      <mesh position={[-0.88, 0.47, 0]}>
        <sphereGeometry args={[0.1, 20, 20]} />
        <meshStandardMaterial color={skinDark} roughness={0.75} />
      </mesh>

      {/* Legs: upper */}
      <mesh position={[0.2, -0.15, 0]}>
        <capsuleGeometry args={[0.13, 0.64, 6, 16]} />
        <meshStandardMaterial color="#26426b" roughness={0.75} />
      </mesh>
      <mesh position={[-0.2, -0.15, 0]}>
        <capsuleGeometry args={[0.13, 0.64, 6, 16]} />
        <meshStandardMaterial color="#26426b" roughness={0.75} />
      </mesh>
      {/* Legs: lower */}
      <mesh position={[0.2, -1.2, 0]}>
        <capsuleGeometry args={[0.11, 0.7, 6, 16]} />
        <meshStandardMaterial color={skin} roughness={0.7} />
      </mesh>
      <mesh position={[-0.2, -1.2, 0]}>
        <capsuleGeometry args={[0.11, 0.7, 6, 16]} />
        <meshStandardMaterial color={skin} roughness={0.7} />
      </mesh>
      {/* Feet */}
      <mesh position={[0.22, -1.82, 0.08]}>
        <boxGeometry args={[0.2, 0.12, 0.38]} />
        <meshStandardMaterial color="#222a38" roughness={0.8} />
      </mesh>
      <mesh position={[-0.22, -1.82, 0.08]}>
        <boxGeometry args={[0.2, 0.12, 0.38]} />
        <meshStandardMaterial color="#222a38" roughness={0.8} />
      </mesh>

      {/* Ground shadow disc */}
      <mesh position={[0, -1.92, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.9, 32]} />
        <meshBasicMaterial color="#000" transparent opacity={0.28} />
      </mesh>

      {/* Joint markers */}
      {JOINTS.flatMap((joint) =>
        joint.markers.map((m) => (
          <JointMarker
            key={`${joint.id}-${m.side}`}
            jointId={joint.id}
            jointName={joint.name}
            side={m.side}
            position={m.position}
          />
        )),
      )}
    </group>
  )
}
