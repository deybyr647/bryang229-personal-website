import './home.css';
import facePic from '../../images/bryan.jpg';
import hw from '../../images/hw.jpg';

import {Row, Col, Container, Jumbotron, Image, Card, CardDeck} from 'react-bootstrap';

const ImageJumbotron = () => (
    <Row>
        <Col xs={10} sm={5} md={8} lg={6} xl={5} className='mt-4 mx-auto'>
            <Jumbotron className='m-auto text-center shadow'>
                <Image src={facePic} fluid rounded className='mb-5 shadow-lg'/>
                <h3>Bryan Bonilla Garay</h3>
            </Jumbotron>
        </Col>
    </Row>
);

const LandingCard = ({obj}) => (
    <Card className='shadow text-center mx-4 mt-4'>
        <Card.Img variant='top' src={obj.image}/>
        <Card.Body>
            <Card.Title>{obj.title}</Card.Title>
            <Card.Text>
                {obj.description}
            </Card.Text>
        </Card.Body>
    </Card>
);

const cardContent = [
    {
        title: "Hardware",
        image: hw,
        description: "Lorem ipsum dolor sit amet, consectetur adispising elit",
    },
    {
        title: "A Bit About Me...",
        image: null,
        description: "Hey there! Welcome to my site! Make yourself at home while you grab some water. This is my online portfolio, and is home to various things, from my resume and contact information, to a variety of personal projects I've invested time in. I'm always willing to collaborate, and if you are too, don't hesitate to contact me! I don't bite, usually..."
    }
]

const CardsArea = ({children}) => (
    <Row className='my-3 mx-auto'>
        <Col xs={12} md={12} lg={12} xl={10} className='my-3 mx-auto'>
            <CardDeck>
                {children}
            </CardDeck>
        </Col>
    </Row>
);

const Home = () => (
    <Container>
        <ImageJumbotron/>
        <CardsArea>
            {cardContent.map(el => <LandingCard obj={el}/>)}
        </CardsArea>
    </Container>
);

export default Home;