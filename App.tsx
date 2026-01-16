
import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, Stars, ContactShadows, Loader } from '@react-three/drei';
import Scene from './components/Scene';
import Overlay from './components/Overlay';

const App: React.FC = () => {
  const [started, setStarted] = useState(false);

  return (
    <div className="w-full h-screen relative bg-[#87CEEB]">
      {!started && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 text-white p-6 text-center">
          <h1 className="text-4xl md:text-6xl font-zen mb-8 text-orange-400">静悟禅生</h1>
          <p className="max-w-md font-serif-sc text-gray-300 mb-12 italic leading-relaxed">
            "穷极一生，我们追求的到底是什么？"
          </p>
          <button
            onClick={() => setStarted(true)}
            className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-serif-sc tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-900/50"
          >
            开启禅意之旅
          </button>
        </div>
      )}

      <Canvas
        shadows
        camera={{ position: [0, 2, 10], fov: 45 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <Scene />
          <Sky 
            distance={450000} 
            sunPosition={[0, -0.05, -1]} 
            inclination={0} 
            azimuth={0.25} 
            mieCoefficient={0.005}
            mieDirectionalG={0.8}
            rayleigh={3}
          />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <OrbitControls 
            enablePan={false} 
            enableZoom={true} 
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>

      {started && <Overlay />}
      
      <Loader />
    </div>
  );
};

export default App;
