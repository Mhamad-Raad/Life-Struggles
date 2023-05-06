import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Row6 = () => {
  const clickHandler = () => {
    window.open('https://www.helpguide.org/');
  };
  return (
    <Row
      className='text-center align-items-center justify-content-center'
      style={{
        position: 'absolute',
        width: '100%',
        height: '100vh',
        padding: '0px 30px 0px',
        top: '500vh',
      }}
    >
      <Col xs={12}>
        <h1>
          It's time to get
          <br /> the support you need
        </h1>
        <h2 style={{ marginBottom: '30px', marginTop: '-20px' }}>
          To get your life back
        </h2>
        <Button variant='outline-light' size='lg' onClick={clickHandler}>
          Get help now
        </Button>
      </Col>
    </Row>
  );
};

export default Row6;
