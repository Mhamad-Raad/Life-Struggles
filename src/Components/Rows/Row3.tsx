import { FC } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Row3: FC<{}> = () => {
  return (
    <Row
      className='text-center align-items-center justify-content-center'
      style={{
        position: 'absolute',
        width: '100%',
        height: '100vh',
        padding: '0px 30px 0px',
        top: '200vh',
      }}
    >
      <Col xs={12}>
        <h1 className='mb-1'>Lost</h1>
        <h1 className='mb-1'>Overwhelmed</h1>
        <h1>Empty inside</h1>
      </Col>
    </Row>
  );
};

export default Row3;
