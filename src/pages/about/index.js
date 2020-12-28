import {Col, Row, Container, Image, Card, ListGroup, ListGroupItem, Jumbotron} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

import bryan from '../../images/bryan.jpg';
import './about.css';

const Bio = () => (
    <Row>
       <Card className='m-1'>
            <Card.Img src={bryan}/>
        </Card> 

        <Jumbotron className='w-100 m-1'>
            <h3 className='text-center'>Contact Information</h3>
            <ListGroup>
                {contactInfo.map((el, ndx) => <ContactCard obj={el} key={ndx}/>)}
            </ListGroup>
        </Jumbotron>
    </Row>
    
)

const ContactCard = ({obj}) => (
    <ListGroupItem className='m-3'><FontAwesomeIcon icon={obj.ico}/> <a href={obj.link} className='text-decoration-none' rel='noopener noreferrer' target='_blank'>{obj.name}</a></ListGroupItem>
)

const contactInfo = [
    {
        name: "LinkedIn",
        link: "https://linkedin.com",
        ico: faLinkedin
    },
    {
        name: "GitHub",
        link: "https://github.com",
        ico: faGithub
    },
    {
        name: "Email",
        link: "mailto:bryang229@gmail.com",
        ico: faEnvelope
    }
]

const SkillCard = ({skillObj}) => (
    <Card className='m-1'>
        <Row>
            <Col>
                <Card.Img src={bryan}/>
            </Col>

            <Col className=''>
                <Card.Body>
                    <Card.Title>Test Title</Card.Title>
                    <Card.Text>Test Content</Card.Text>
                </Card.Body>
            </Col>
        </Row>
    </Card>
)

const About = () => (
    <Container className='my-3'>
        <Row className='align-items-center justify-content-center'>

            <Col xl={4} className=''>
                <Bio/>
            </Col>

            <Col xl={4} className=''>
                <Row>
                    <SkillCard/>
                    <SkillCard/>
                    <SkillCard/>
                </Row>
            </Col>

            <Col xl={4} className=''>
                <Jumbotron className=''>
                    
                    <p>
                    Hey there! Welcome to my site! Make yourself at home while you grab some water. This is my online portfolio, and is home to various things, from my resume and contact information, to a variety of personal projects I've invested time in. I'm always willing to collaborate, and if you are too, don't hesitate to contact me! I don't bite, usually...
                    </p>
                </Jumbotron>
            </Col>
            
        </Row>
    </Container>
);

export default About;