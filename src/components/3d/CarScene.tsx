"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Float,
  Stars,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import CarModel from "./CarModel";
import RainParticles from "./RainParticles";

function SceneContent() {
  return (
    <>
      {/* Ambient */}
      <ambientLight intensity={0.1} />

      {/* Gold key light */}
      <pointLight position={[4, 3, 2]} intensity={8} color="#CA8A04" />

      {/* Blue rim light (cyberpunk city) */}
      <pointLight position={[-4, 2, -2]} intensity={6} color="#00BFFF" />

      {/* Underglow neon gold */}
      <pointLight position={[0, -0.6, 0]} intensity={12} color="#FFD700" distance={3} />

      {/* Front fill */}
      <pointLight position={[0, 1, 4]} intensity={3} color="#ffffff" />

      {/* Headlights */}
      <pointLight position={[0.55, 0.2, 1.8]} intensity={15} color="#E0F0FF" distance={4} />
      <pointLight position={[-0.55, 0.2, 1.8]} intensity={15} color="#E0F0FF" distance={4} />

      {/* Taillights */}
      <pointLight position={[0.5, 0.2, -1.8]} intensity={10} color="#FF2020" distance={3} />
      <pointLight position={[-0.5, 0.2, -1.8]} intensity={10} color="#FF2020" distance={3} />

      {/* Stars background */}
      <Stars radius={60} depth={30} count={800} factor={2} saturation={0} fade speed={0.5} />

      {/* Rain */}
      <RainParticles />

      {/* Wet ground reflection */}
      <ContactShadows
        position={[0, -0.85, 0]}
        opacity={0.9}
        scale={6}
        blur={2.5}
        far={4}
        color="#FFD700"
      />

      {/* Car */}
      <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.15}>
        <CarModel />
      </Float>

      {/* Post processing */}
      <EffectComposer>
        <Bloom
          intensity={1.2}
          luminanceThreshold={0.3}
          luminanceSmoothing={0.8}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
}

export default function CarScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [2.5, 1.2, 3.5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <SceneContent />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.2}
            autoRotate
            autoRotateSpeed={0.4}
            target={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
