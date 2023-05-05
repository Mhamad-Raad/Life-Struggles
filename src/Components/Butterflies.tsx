import { FC } from 'react';
import { Float } from '@react-three/drei';
import Butterfly from '../models/Butterfly';
import useWindowSize from '../CustomHooks/useWindowResize';

const Butterflies: FC<{}> = () => {
  const windowSize: number = useWindowSize();

  let scale = 0.05;

  if (windowSize < 768) {
    scale = 0.02;
  }
  if (windowSize < 400) {
    scale = 0.01;
  }

  return (
    <>
      {/* top */}
      <Float
        speed={1} // Animation speed, defaults to 1
        floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <Butterfly
          rotation-x={Math.PI * scale}
          scale={scale}
          position={
            windowSize > 768
              ? [0, -2.5, 0]
              : windowSize > 768
              ? [0, -2, 0]
              : [0, -1.5, 0]
          }
        />
        <Butterfly
          scale={scale}
          position={
            windowSize > 768
              ? [-10, -3, -6]
              : windowSize > 768
              ? [-4, -1, -6]
              : [-2, -1, -6]
          }
          rotation-x={Math.PI * scale}
        />
        <Butterfly
          scale={scale}
          position={
            windowSize > 768
              ? [10, -4, -10]
              : windowSize > 400
              ? [6, -3, -10]
              : [3.5, -3, -10]
          }
        />
      </Float>
      {/* top */}

      {/* middle */}
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <Butterfly
          scale={scale}
          position={
            windowSize > 768
              ? [-1, -12.5, 0]
              : windowSize > 400
              ? [-3, -10.5, -3]
              : [-2, -10, -3]
          }
        />
        <Butterfly
          scale={scale}
          position={
            windowSize > 768
              ? [12, -14, -10]
              : windowSize > 400
              ? [8, -12, -15]
              : [2.5, -11, -5]
          }
        />
      </Float>
      {/* middle */}

      {/* Bottom */}
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <Butterfly scale={scale} position={[-3, -19.5, -2]} />
        <Butterfly scale={scale} position={[8, -23, -10]} />
        <Butterfly scale={scale} position={[4, -24, -3]} />
      </Float>
      {/* Bottom */}
    </>
  );
};

export default Butterflies;
