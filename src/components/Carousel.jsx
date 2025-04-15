import { animated, useSpring } from "@react-spring/three";
import { IceCream } from "./Beach/IceCream";
import { Palm } from "./Beach/Palm";
import { VolleyBall } from "./Beach/VolleyBall";
import Burger from "./Food/Burger";
import Cannon from "./Food/Cannon";
import { HotDog } from "./Food/HotDog";
import { TargetStand } from "./Food/TargetStand";
import { BookCase } from "./Haunted/BookCase";
import { FerrisWheel } from "./Park/FerrisWheel";
import { Podium } from "./Park/Podium";
import { ShipLight } from "./Park/ShipLight";
import { ThreePictureBook } from "./Three_picture_books";

const STEP_DUR = 3000;

export const Carousel = (props) => {
  const { carouselRotation } = useSpring({
    from: {
      carouselRotation: 0,
    },
    to: [
      {
        carouselRotation: -Math.PI / 2,
        delay: STEP_DUR,
      },
      {
        carouselRotation: -Math.PI,
        delay: STEP_DUR,
      },
      {
        carouselRotation: -1.5 * Math.PI,
        delay: STEP_DUR,
      },
      {
        carouselRotation: -2 * Math.PI,
        delay: STEP_DUR,
      },
    ],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },
    loop: true,
    immediate: true,
  });

  return (
    <>
      <group rotation-y={-Math.PI / 4} position-y={-0.01}>
        <animated.group rotation-y={carouselRotation}>
          <mesh position={[0, -2, 0]}>
            <meshStandardMaterial color={"#D6D6D6"} />
            <cylinderBufferGeometry args={[12, 12, 4, 64]} />
          </mesh>
          <mesh scale={[1, 6, 24]} position-y={3}>
            <boxBufferGeometry />
            <meshStandardMaterial color={"white"} />
          </mesh>
          <mesh scale={[24, 6, 1]} position-y={3}>
            <boxBufferGeometry />
            <meshStandardMaterial color={"white"} />
          </mesh>
          {/* PARK */}
          <>
            <Podium position={[1, 0, 10]} rotation-y={Math.PI / 2} />
            <FerrisWheel position={[6, 0, 2]} scale={[3, 3, 3]} />
            <ShipLight
              position={[5, 0.66, 6]}
              scale={[0.5, 0.5, 0.5]}
              rotation-x={-Math.PI / 16}
              rotation-y={-Math.PI}
            />
          </>
          {/* FOOD */}
          <>
            <Burger position={[3, 4, -10]} scale={[3, 3, 3]} />
            <Burger position={[3, 4, -3]} scale={[3, 3, 3]} />
            <Burger position={[10, 4, -3]} scale={[3, 3, 3]} />
            <Cannon
              position={[10, 0, -3]}
              scale={[2, 2, 2]}
              rotation-y={Math.PI / 2}
            />
            <TargetStand
              position={[2, 0, -3]}
              scale={[1, 1, 1]}
              rotation-y={Math.PI / 2}
            />
            <HotDog
              position={[4, 1, -7]}
              scale={[4, 4, 4]}
              rotation-y={-Math.PI / 8}
            />
          </>
          {/* BEACH */}
          <>
            <Palm scale={[3, 3, 3]} position={[-1, 0, -6]} />
            <Palm
              scale={[2.8, 2.6, 2.6]}
              position={[-7, 0, -5]}
              rotation-y={Math.PI / 6}
            />
            <VolleyBall position={[-1, 0, -14]} />
          </>
          {/* Book */}
          <>
            <BookCase
              scale={[3, 3, 3]}
              position={[-4, 6, 3]}
              rotation-y={Math.PI / 1.2}
            />
            <ThreePictureBook
              position={[-6.5, 2, 7]}
              rotation-y={Math.PI / -5}
              rotation-x={Math.PI / -10}
              rotation-z={Math.PI / -10}
            />
          </>
        </animated.group>
      </group>
    </>
  );
};
