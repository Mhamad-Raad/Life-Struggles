import { FC } from 'react';
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Vignette,
} from '@react-three/postprocessing';

const LightEffects: FC<{}> = () => {
  const bloomEffect = {
    intensity: 2,
    luminanceThreshold: 0.1,
    luminanceSmoothing: 0.9,
    height: 1000,
  };

  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={0.02}
        bokehScale={5}
        height={480}
      />
      <Bloom
        {...bloomEffect}
        blendFunction={0}
      />
      <Vignette eskil={false} offset={0.1} darkness={1.5} />
    </EffectComposer>
  );
};

export default LightEffects;
