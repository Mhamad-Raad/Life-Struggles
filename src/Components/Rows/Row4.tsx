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
        top: '300vh',
      }}
    >
      <Col xs={12}>
          <h1>
            Drifting through life <br />
            With no help or guidance
          </h1>
      </Col>
    </Row>
  );
};

export default Row1;
