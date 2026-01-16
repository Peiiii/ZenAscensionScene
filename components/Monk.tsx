
import React from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface MonkProps {
  position: [number, number, number];
}

const Monk: React.FC<MonkProps> = ({ position }) => {
  // Creating a stylized monk using basic geometries to represent the silhouette in the image
  return (
    <group position={position}>
      {/* Robes - Body */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.4, 0.6, 1.8, 32]} />
        <meshStandardMaterial 
          color="#e65100" 
          roughness={0.8} 
          metalness={0.1}
          emissive="#bf360c"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Robe Draping Detail (Simplified) */}
      <mesh position={[0.1, -0.4, 0]} rotation={[0, 0, -0.1]}>
        <cylinderGeometry args={[0.42, 0.5, 1.6, 32]} />
        <meshStandardMaterial color="#ff9800" roughness={1} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial color="#fdd835" roughness={0.4} />
      </mesh>

      {/* Legs (Hidden by robes usually, but adding silhouette) */}
      <mesh position={[-0.15, -1.4, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.4, 16]} />
        <meshStandardMaterial color="#bf360c" />
      </mesh>
      <mesh position={[0.15, -1.4, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.4, 16]} />
        <meshStandardMaterial color="#bf360c" />
      </mesh>

      {/* Subtle Aura */}
      <mesh position={[0, -0.2, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#ffd700" transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>
    </group>
  );
};

export default Monk;
