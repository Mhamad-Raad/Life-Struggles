import { FC } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Row1: FC<{}> = () => {
  return (
    <Row
      className='text-center align-items-center justify-content-center'
      style={{
        position: 'absolute',
        width: '100%',
        height: '100vh',
        padding: '0px 30px 0px',
        top: '400vh',
      }}
    >
      <Col xs={8}>
        <h1>
          But there is hope...
          <br /> and people who can help
        </h1>
      </Col>
    </Row>
  );
};

export default Row1;
