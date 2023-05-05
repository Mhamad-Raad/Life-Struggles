import { FC } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useWindowSize from '../../CustomHooks/useWindowResize';

const Row1: FC<{}> = () => {
  const windowSize: number = useWindowSize();

  return (
    <Row
      className='text-center align-items-center justify-content-center'
      style={{
        position: 'absolute',
        width: '100%',
        height: windowSize < 768 ? '75vh' : '100vh',
        padding: '0px 30px 0px',
      }}
    >
      <Col xs={12}>
        <h1>Life can be a struggle</h1>
      </Col>
    </Row>
  );
};

export default Row1;
