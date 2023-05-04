import { FC, useRef } from 'react';
import { PositionalAudio } from '@react-three/drei';

import Sound from '../sounds/ambient.mp3';
import Sound2 from '../sounds/ambient-rain.mp3';
import Sound3 from '.././sounds/ambient-happy.mp3';

const Sounds: FC<{}> = () => {
  const music = useRef();
  const music_2 = useRef();
  const music_3 = useRef();

  return (
    <>
      <group position={[0, 0, 0]}>
        <PositionalAudio ref={music} autoplay loop url={Sound} distance={1.2} load={Sound} />
      </group>
      <group position={[0, -20, 0]}>
        <PositionalAudio
          ref={music_2}
          autoplay
          loop
          url={Sound2}
          distance={3}
          load={Sound2}
        />
      </group>
      <group position={[0, -40, 0]}>
        <PositionalAudio
          ref={music_3}
          autoplay
          loop
          url={Sound3}
          distance={1.2}
          load={Sound3}
        />
      </group>
    </>
  );
};

export default Sounds;
