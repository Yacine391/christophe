"use client";

import { useRef } from "react";
import * as THREE from "three";
import { RoundedBox } from "@react-three/drei";

function Wheel({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Tire */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 0.15, 32]} />
        <meshStandardMaterial color="#111111" roughness={0.9} metalness={0.1} />
      </mesh>
      {/* Rim */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.14, 0.14, 0.16, 16]} />
        <meshStandardMaterial color="#888888" roughness={0.2} metalness={0.9} />
      </mesh>
      {/* Rim spokes — 3 légers */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[Math.PI / 2, (i * Math.PI * 2) / 3, 0]}>
          <boxGeometry args={[0.015, 0.12, 0.12]} />
          <meshStandardMaterial color="#AAAAAA" roughness={0.1} metalness={1} />
        </mesh>
      ))}
      {/* Neon ring under wheel */}
      <mesh rotation={[0, 0, Math.PI / 2]} position={[0, -0.01, 0]}>
        <torusGeometry args={[0.18, 0.008, 8, 32]} />
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFD700"
          emissiveIntensity={3}
        />
      </mesh>
    </group>
  );
}

function NeonStrip({
  start,
  end,
  color = "#FFD700",
}: {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
}) {
  const mid: [number, number, number] = [
    (start[0] + end[0]) / 2,
    (start[1] + end[1]) / 2,
    (start[2] + end[2]) / 2,
  ];
  const length = Math.sqrt(
    Math.pow(end[0] - start[0], 2) +
    Math.pow(end[1] - start[1], 2) +
    Math.pow(end[2] - start[2], 2)
  );
  return (
    <mesh position={mid}>
      <boxGeometry args={[0.012, 0.012, length]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={4}
        toneMapped={false}
      />
    </mesh>
  );
}

export default function CarModel() {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1}>
      {/* === BODY === */}
      {/* Lower body */}
      <RoundedBox args={[1.9, 0.42, 4.2]} radius={0.06} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#0A0A0A"
          roughness={0.15}
          metalness={0.95}
          envMapIntensity={1.2}
        />
      </RoundedBox>

      {/* Upper body / cabin */}
      <RoundedBox args={[1.65, 0.52, 2.2]} radius={0.08} smoothness={4} position={[0, 0.46, -0.1]}>
        <meshStandardMaterial
          color="#0D0D0D"
          roughness={0.12}
          metalness={0.95}
          envMapIntensity={1.2}
        />
      </RoundedBox>

      {/* Hood slope */}
      <mesh position={[0, 0.28, 1.45]} rotation={[-0.28, 0, 0]}>
        <boxGeometry args={[1.75, 0.08, 0.7]} />
        <meshStandardMaterial color="#0A0A0A" roughness={0.15} metalness={0.95} />
      </mesh>

      {/* Trunk slope */}
      <mesh position={[0, 0.28, -1.45]} rotation={[0.28, 0, 0]}>
        <boxGeometry args={[1.75, 0.08, 0.7]} />
        <meshStandardMaterial color="#0A0A0A" roughness={0.15} metalness={0.95} />
      </mesh>

      {/* === WINDOWS === */}
      {/* Windshield */}
      <mesh position={[0, 0.5, 0.95]} rotation={[-0.5, 0, 0]}>
        <planeGeometry args={[1.5, 0.5]} />
        <meshStandardMaterial
          color="#001122"
          roughness={0}
          metalness={0.1}
          transparent
          opacity={0.85}
          envMapIntensity={2}
        />
      </mesh>

      {/* Rear windshield */}
      <mesh position={[0, 0.5, -0.95]} rotation={[0.5, 0, 0]}>
        <planeGeometry args={[1.5, 0.45]} />
        <meshStandardMaterial
          color="#001122"
          roughness={0}
          metalness={0.1}
          transparent
          opacity={0.85}
          envMapIntensity={2}
        />
      </mesh>

      {/* Side windows left */}
      <mesh position={[-0.83, 0.48, -0.05]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[1.6, 0.38]} />
        <meshStandardMaterial
          color="#001122"
          roughness={0}
          metalness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Side windows right */}
      <mesh position={[0.83, 0.48, -0.05]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[1.6, 0.38]} />
        <meshStandardMaterial
          color="#001122"
          roughness={0}
          metalness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* === CHROME TRIM === */}
      {/* Window belt line left */}
      <mesh position={[-0.84, 0.27, 0]}>
        <boxGeometry args={[0.02, 0.04, 3.8]} />
        <meshStandardMaterial color="#C0C0C0" roughness={0.05} metalness={1} />
      </mesh>

      {/* Window belt line right */}
      <mesh position={[0.84, 0.27, 0]}>
        <boxGeometry args={[0.02, 0.04, 3.8]} />
        <meshStandardMaterial color="#C0C0C0" roughness={0.05} metalness={1} />
      </mesh>

      {/* Grille */}
      <mesh position={[0, 0.08, 2.12]}>
        <boxGeometry args={[1.4, 0.3, 0.04]} />
        <meshStandardMaterial
          color="#111111"
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Grille accent gold */}
      <mesh position={[0, 0.08, 2.14]}>
        <boxGeometry args={[1.4, 0.015, 0.02]} />
        <meshStandardMaterial
          color="#CA8A04"
          emissive="#CA8A04"
          emissiveIntensity={2}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* === HEADLIGHTS === */}
      {/* Left headlight */}
      <mesh position={[0.55, 0.18, 2.12]}>
        <boxGeometry args={[0.35, 0.12, 0.04]} />
        <meshStandardMaterial
          color="#E8F4FF"
          emissive="#E8F4FF"
          emissiveIntensity={5}
          toneMapped={false}
        />
      </mesh>

      {/* Right headlight */}
      <mesh position={[-0.55, 0.18, 2.12]}>
        <boxGeometry args={[0.35, 0.12, 0.04]} />
        <meshStandardMaterial
          color="#E8F4FF"
          emissive="#E8F4FF"
          emissiveIntensity={5}
          toneMapped={false}
        />
      </mesh>

      {/* DRL strip left */}
      <mesh position={[0.55, 0.06, 2.13]}>
        <boxGeometry args={[0.3, 0.025, 0.02]} />
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFD700"
          emissiveIntensity={8}
          toneMapped={false}
        />
      </mesh>

      {/* DRL strip right */}
      <mesh position={[-0.55, 0.06, 2.13]}>
        <boxGeometry args={[0.3, 0.025, 0.02]} />
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFD700"
          emissiveIntensity={8}
          toneMapped={false}
        />
      </mesh>

      {/* === TAILLIGHTS === */}
      <mesh position={[0.55, 0.18, -2.12]}>
        <boxGeometry args={[0.35, 0.1, 0.04]} />
        <meshStandardMaterial
          color="#FF1010"
          emissive="#FF1010"
          emissiveIntensity={4}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[-0.55, 0.18, -2.12]}>
        <boxGeometry args={[0.35, 0.1, 0.04]} />
        <meshStandardMaterial
          color="#FF1010"
          emissive="#FF1010"
          emissiveIntensity={4}
          toneMapped={false}
        />
      </mesh>

      {/* === NEON UNDERGLOW === */}
      {/* Front neon */}
      <NeonStrip start={[-0.85, -0.22, 1.8]} end={[0.85, -0.22, 1.8]} />
      {/* Rear neon */}
      <NeonStrip start={[-0.85, -0.22, -1.8]} end={[0.85, -0.22, -1.8]} />
      {/* Left side neon */}
      <NeonStrip start={[-0.9, -0.22, 1.8]} end={[-0.9, -0.22, -1.8]} />
      {/* Right side neon */}
      <NeonStrip start={[0.9, -0.22, 1.8]} end={[0.9, -0.22, -1.8]} />

      {/* === WHEELS === */}
      <Wheel position={[0.88, -0.28, 1.25]} />
      <Wheel position={[-0.88, -0.28, 1.25]} />
      <Wheel position={[0.88, -0.28, -1.25]} />
      <Wheel position={[-0.88, -0.28, -1.25]} />

      {/* === DOOR HANDLES (chrome) === */}
      <mesh position={[0.87, 0.22, 0.35]}>
        <boxGeometry args={[0.02, 0.04, 0.18]} />
        <meshStandardMaterial color="#DDDDDD" roughness={0.05} metalness={1} />
      </mesh>
      <mesh position={[-0.87, 0.22, 0.35]}>
        <boxGeometry args={[0.02, 0.04, 0.18]} />
        <meshStandardMaterial color="#DDDDDD" roughness={0.05} metalness={1} />
      </mesh>
      <mesh position={[0.87, 0.22, -0.45]}>
        <boxGeometry args={[0.02, 0.04, 0.18]} />
        <meshStandardMaterial color="#DDDDDD" roughness={0.05} metalness={1} />
      </mesh>
      <mesh position={[-0.87, 0.22, -0.45]}>
        <boxGeometry args={[0.02, 0.04, 0.18]} />
        <meshStandardMaterial color="#DDDDDD" roughness={0.05} metalness={1} />
      </mesh>

      {/* === SPOILER / ROOF ANTENNA === */}
      <mesh position={[0, 0.75, -1.05]}>
        <boxGeometry args={[1.5, 0.04, 0.15]} />
        <meshStandardMaterial color="#0A0A0A" roughness={0.15} metalness={0.95} />
      </mesh>
    </group>
  );
}
