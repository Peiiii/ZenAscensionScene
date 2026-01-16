
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cloud, Clouds, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import Monk from './Monk';

const Scene: React.FC = () => {
  const cloudGroup = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (cloudGroup.current) {
      cloudGroup.current.rotation.y += 0.001;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[0, -5, -5]}
        intensity={2}
        color="#ff8c00" // Warm glow from the sunset clouds
      />
      <pointLight position={[0, 10, 0]} intensity={1.5} color="#ffffff" />

      {/* Cloud Layers */}
      <group ref={cloudGroup}>
        <Clouds material={THREE.MeshStandardMaterial}>
          {/* Main bottom layer */}
          <Cloud 
            segments={40} 
            bounds={[10, 2, 10]} 
            volume={10} 
            color="#ffaa33" 
            position={[0, -3, 0]} 
            opacity={0.8}
            fade={10}
            speed={0.2}
          />
          <Cloud 
            segments={20} 
            bounds={[15, 1, 15]} 
            volume={6} 
            color="#ff7700" 
            position={[5, -4, -5]} 
            opacity={0.5}
          />
          <Cloud 
            segments={20} 
            bounds={[15, 1, 15]} 
            volume={6} 
            color="#ffa500" 
            position={[-5, -4, 5]} 
            opacity={0.5}
          />
        </Clouds>
      </group>

      {/* Spiritual Monk Character */}
      <Float
        speed={1.5} 
        rotationIntensity={0.5} 
        floatIntensity={2} 
        floatingRange={[0, 1]}
      >
        <Monk position={[0, 1, 0]} />
        <Sparkles 
          count={50} 
          scale={[3, 5, 3]} 
          size={2} 
          speed={0.3} 
          opacity={0.6} 
          color="#ffd700" 
        />
      </Float>

      {/* Atmospheric Particles */}
      <Sparkles 
        count={200} 
        scale={20} 
        size={1.5} 
        speed={0.1} 
        opacity={0.2} 
        color="white" 
      />
    </>
  );
};

export default Scene;
