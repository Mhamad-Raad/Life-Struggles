import { FC } from 'react';
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Vignette,
} from '@react-three/postprocessing';

import useWindowSize from '../CustomHooks/useWindowResize';

const LightEffects: FC<{}> = () => {
  const bloomEffect = {
    intensity: 2,
    luminanceThreshold: 0.1,
    luminanceSmoothing: 0.9,
    height: 1000,
  };

  const windowSize: number = useWindowSize();

  let focalLength = 0.02;

  if (windowSize < 768) {
    focalLength = 0.1;
  }

  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={focalLength}
        bokehScale={5}
        height={500}
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
