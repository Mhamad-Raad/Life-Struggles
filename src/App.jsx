import { ScrollControls, Scroll } from '@react-three/drei';

import Container from 'react-bootstrap/Container';

import Butterflies from './Components/Butterflies';
import Sounds from './Components/Sounds';
import SparklesEffect from './Components/Sparkles';
import LightEffects from './Components/LightEffects';

import Row1 from './Components/Rows/Row1';
import Row2 from './Components/Rows/Row2';
import Row3 from './Components/Rows/Row3';
import Row4 from './Components/Rows/Row4';
import Row5 from './Components/Rows/Row5';
import Row6 from './Components/Rows/Row6';

import './App.scss';

const App = () => {
  return (
    <>
      <LightEffects />

      <color attach='background' args={['#000']} />
      <ambientLight intensity={0.2} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />

      <ScrollControls pages={6} damping={0.25}>
        <Scroll>
          <SparklesEffect />
          <Sounds />
          <Butterflies />
        </Scroll>

        <Scroll html style={{ width: '100%' }}>
          <Container style={{ height: '100px', position: 'relative' }}>
            <Row1 />
            <Row2 />
            <Row3 />
            <Row4 />
            <Row5 />
            <Row6 />
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default App;
