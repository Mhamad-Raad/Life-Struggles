import {
  Environment,
  Sparkles,
  ScrollControls,
  Scroll,
  PositionalAudio,
  Float,
} from '@react-three/drei';

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

      <ScrollControls pages={6} damping={0.25}>
        <Scroll>
          <Butterfly
            rotation-x={Math.PI * 0.05}
            scale={0.05}
            position={[0, -2.5, 0]}
          />
          <Butterfly scale={0.05} position={[-10, -3, -6]} />
          <Butterfly scale={0.05} position={[10, -4, -10]} />
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
