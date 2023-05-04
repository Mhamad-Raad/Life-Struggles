import {
  Environment,
  Sparkles,
  ScrollControls,
  Scroll,
  PositionalAudio,
  Float,
} from '@react-three/drei';
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Vignette,
} from '@react-three/postprocessing';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Butterfly } from './models/Butterfly';

import './App.scss';

const App = () => {
  return (
    <>
      <color attach='background' args={['#000']} />
      <Environment preset='warehouse' />

      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={5}
          height={480}
        />
        <Bloom
          intensity={2}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
          height={1000}
        />
        <Vignette eskil={false} offset={0.1} darkness={1.5} />
      </EffectComposer>

      <ScrollControls pages={6} damping={0.25}>
        <Scroll>
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={2} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Butterfly
              rotation-x={Math.PI * 0.05}
              scale={0.05}
              position={[0, -2.5, 0]}
            />
            <Butterfly scale={0.05} position={[-10, -3, -6]} />
            <Butterfly scale={0.05} position={[10, -4, -10]} />
          </Float>
        </Scroll>
        <Scroll html style={{ width: '100%' }}>
          <Container style={{ position: 'relative' }}>
            <Row
              className='text-center justify-content-center align-items-center'
              style={{
                position: 'absolute',
                width: '100%',
                height: '100vh',
              }}
            >
              <Col xs={6}>
                <div>
                  <h1></h1>
                </div>
                <h1>ScrollControls</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum voluptates. Quisquam, voluptatum
                  voluptates. Quisquam, voluptatum voluptates. Quisquam,
                  voluptatum voluptates. Quisquam, voluptatum voluptates.
                  Quisquam,
                </p>
              </Col>
            </Row>
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default App;
