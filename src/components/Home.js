import { Accordion, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Status from './Status';

function Home(props) {
  console.log(props.info)

  if (props.info) {
  return (
    <>
    <Container fluid className='d-flex align-items-center justify-content-center' style={{height: '80vh', flexDirection: 'column'}}>
    <h2 style={{marginInline: 10, marginBottom: 20, marginTop: 70}}><a href="https://github.com/SMTahaWaqar" target="_blank" rel='noreferrer'>Link To My Github</a></h2>
    <h2 style={{marginInline: 10, marginBottom: 50}}><a href="https://www.linkedin.com/in/syed-muhammad-taha-waqar-736773232/" target="_blank" rel='noreferrer'>Link To My LinkedIn Profile</a></h2>
    <Card style={{ width: '50rem' }}>
      <Card.Body>
        <Card.Title><h2 style={{textAlign: 'center', textTransform: 'uppercase'}}>{props.info.course}</h2></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <Accordion defaultActiveKey={['0']} alwaysOpen className='p-5'>
            <Accordion.Item eventKey="0">
              <Accordion.Header><h3>Duration : {props.info.duration}</h3></Accordion.Header>
              <Accordion.Body>
                <h5>Start Date : {props.info.startDate}</h5>
                <h5>End Date : {props.info.endDate}</h5>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <h5 style={{textTransform: 'uppercase'}}>Current Status : {props.info.status}</h5>
        </Card.Subtitle>
        <Card.Text>
          <p style={{textTransform: 'capitalize'}}>citeria for certification : <strong className='mark'>{props.info.certification}</strong></p>
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
    <Status />
    </>
  );
}
return (
  <h2 style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}}>Loading</h2>
);
}

export default Home;