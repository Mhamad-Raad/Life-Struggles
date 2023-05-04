import { ScrollControls, Scroll } from '@react-three/drei';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './App.scss';

const App = () => {
  return (
    <>
      <color attach='background' args={['#000']} />
      <ScrollControls pages={6} damping={0.25}>
        <Scroll></Scroll>
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
              <Col xs={6} >
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
