"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const RAIN_COUNT = 250;

export default function RainParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const { positions, speeds } = useMemo(() => {
    const positions: number[] = [];
    const speeds: number[] = [];
    for (let i = 0; i < RAIN_COUNT; i++) {
      positions.push(
        (Math.random() - 0.5) * 12,
        Math.random() * 8,
        (Math.random() - 0.5) * 12
      );
      speeds.push(0.04 + Math.random() * 0.06);
    }
    return { positions, speeds };
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!meshRef.current) return;
    for (let i = 0; i < RAIN_COUNT; i++) {
      positions[i * 3 + 1] -= speeds[i];
      if (positions[i * 3 + 1] < -1) {
        positions[i * 3 + 1] = 8;
      }
      dummy.position.set(
        positions[i * 3],
        positions[i * 3 + 1],
        positions[i * 3 + 2]
      );
      dummy.scale.set(0.01, 0.15, 0.01);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, RAIN_COUNT]}>
      <boxGeometry />
      <meshBasicMaterial color="#4488CC" transparent opacity={0.3} />
    </instancedMesh>
  );
}
