import { animated, useSpring } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export function BookCase(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/bookcase-wide/model.gltf");

  const { shelfPosition, booksScale } = useSpring({
    from: {
      shelfPosition: [0, -2.2, 0],
      booksScale: 0,
    },
    to: [
      {
        shelfPosition: [0, 0, 0],
        booksScale: 1,
      },
      {
        shelfPosition: [0, -2.2, 0],
      },
    ],
    config: {
      mass: 5,
      tension: 400,
      friction: 40,
    },
    loop: true,
    pause: true,
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <animated.group rotation={[Math.PI / 2, 0, 0]} position={shelfPosition}>
        <mesh
          geometry={nodes.Cube033.geometry}
          material={materials["BrownDark.049"]}
        />
        <animated.group
          scale-x={booksScale}
          scale-y={booksScale}
          scale-z={booksScale}
        >
          <mesh
            geometry={nodes.Cube033_1.geometry}
            material={materials["PurpleDark.003"]}
          />
          <mesh
            geometry={nodes.Cube033_2.geometry}
            material={materials["White.034"]}
          />
          <mesh
            geometry={nodes.Cube033_3.geometry}
            material={materials["Metal.080"]}
          />
          <mesh
            geometry={nodes.Cube033_4.geometry}
            material={materials["BlueDark.003"]}
          />
          <mesh
            geometry={nodes.Cube033_5.geometry}
            material={materials["GreenDark.007"]}
          />
          <mesh
            geometry={nodes.Cube033_6.geometry}
            material={materials["WoodDark.005"]}
          />
          <mesh
            geometry={nodes.Cube033_7.geometry}
            material={materials["StoneDark.001"]}
          />
          <mesh
            geometry={nodes.Cube033_8.geometry}
            material={materials["Black.030"]}
          />
        </animated.group>
      </animated.group>
    </group>
  );
}
