import { FC } from 'react';
import { Sparkles } from '@react-three/drei';

const SparklesEffect: FC<{}> = () => {
  return (
    <>
      <Sparkles
        noise={0}
        count={500}
        speed={0.01}
        size={0.6}
        color={'#FFD2BE'}
        opacity={10}
        scale={[20, 100, 20]}
      ></Sparkles>
      <Sparkles
        noise={0}
        count={50}
        speed={0.01}
        size={10}
        color={'#FFF'}
        opacity={2}
        scale={[30, 100, 10]}
      ></Sparkles>
    </>
  );
};

export default SparklesEffect;
