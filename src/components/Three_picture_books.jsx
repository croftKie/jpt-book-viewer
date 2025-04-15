import React from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

const STEP_DUR = 1500;

export function ThreePictureBook(props) {
  const { nodes, materials } = useGLTF("./models/books/scene.gltf");
  const { bookScale } = useSpring({
    from: {
      bookScale: 0.7,
    },
    to: [
      {
        bookScale: 0.9,
      },
      {
        bookScale: 0.7,
      },
    ],
    config: {
      mass: 2,
      tension: 100,
      friction: 10,
    },
    loop: true,
    immediate: true,
  });
  return (
    <group {...props} dispose={null}>
      <animated.group scale={bookScale}>
        <mesh
          geometry={nodes.pCube1_standardSurface2_0.geometry}
          material={materials.standardSurface2}
          position={[0, 1.8, 0.398]}
          rotation={[Math.PI, 0, 0]}
          scale={[4.094, 3.6, 0.204]}
        />
        <mesh
          geometry={nodes.pCube2_standardSurface3_0.geometry}
          material={materials.standardSurface3}
          position={[3.147, 1.8, -1.365]}
          rotation={[Math.PI, 0, 0]}
          scale={[4.094, 3.6, 0.204]}
        />
        <mesh
          geometry={nodes.pCube3_standardSurface4_0.geometry}
          material={materials.standardSurface4}
          position={[-3.078, 1.8, -1.365]}
          rotation={[Math.PI, 0, 0]}
          scale={[4.094, 3.6, 0.204]}
        />
      </animated.group>
    </group>
  );
}

useGLTF.preload("/three_picture_books.glb");
