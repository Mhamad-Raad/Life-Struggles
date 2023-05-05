import { FC } from 'react';
import { Float } from '@react-three/drei';
import Butterfly from '../models/Butterfly';
import useWindowSize from '../CustomHooks/useWindowResize';

const Butterflies: FC<{}> = () => {
  const windowSize: number = useWindowSize();
  const isMobile = windowSize < 768;

  let scale = 0.05;

  if (isMobile) {
    scale = 0.01;
  }

  return (
    <>
      {/* top */}
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={2} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <Butterfly
          rotation-x={Math.PI * 0.05}
          scale={scale}
          position={[0, -2.5, 0]}
        />
        <Butterfly
          scale={scale}
          position={isMobile ? [-2, -3, -6] : [-10, -3, -6]}
          rotation-x={Math.PI * 0.05}
        />
        <Butterfly scale={scale} position={[10, -4, -10]} />
      </Float>
      {/* top */}

      {/* middle */}
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={2} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <Butterfly scale={scale} position={[-1, -12.5, 0]} />
        <Butterfly scale={scale} position={[12, -14, -10]} />
      </Float>
      {/* middle */}

      {/* middle */}
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={2} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <Butterfly scale={scale} position={[-3, -19.5, 2]} />
        <Butterfly scale={scale} position={[8, -23, -10]} />
        <Butterfly scale={scale} position={[4, -24, 2]} />
      </Float>
      {/* middle */}
    </>
  );
};

export default Butterflies;
