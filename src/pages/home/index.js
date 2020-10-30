import './home.css';
import {Row, Col, Container, Jumbotron} from 'react-bootstrap';

const ImageJumbotron = () => (
    <Row>
        <Col className='mt-5'>
            <Jumbotron className='m-auto text-center'>
                <h3>Bryan Bonilla Garay</h3>
            </Jumbotron>
        </Col>
    </Row>
)

const Home = () => (
    <Container>
        <ImageJumbotron/>
    </Container>
)

export default Home;