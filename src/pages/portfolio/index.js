import './portfolio.css';

import java from '../../images/java.png';
import radar from '../../images/Radar.jpg';
import moveTheDot from '../../images/image0.jpg';

import {Card, Col, Container, Row, CardColumns, Jumbotron} from 'react-bootstrap';

const PortfolioJumbotron = () => (
    <Row className='mt-4'>
        <Col>
            <Jumbotron className='text-center'>
                <h1>My Projects</h1>
            </Jumbotron>
        </Col>
    </Row>
)

const ProjectCard = ({obj}) => (
    <Card className='text-center mx-auto mt-4'>
        <Card.Img variant='top' src={obj.image}/>
        <Card.Body>
            <Card.Title>{obj.title}</Card.Title>
            <Card.Text>
                {obj.description}
            </Card.Text>
            <Card.Link href={obj.github} target='_blank' rel='noopener noreferrer'>GitHub</Card.Link>
        </Card.Body>
    </Card>
);

const ProjectCollection = ({children}) => (
    <Row className='mt-1 mx-auto'>
        <Col xs={12} md={12} lg={12} xl={12} className='mx-auto'>
            <CardColumns className='p-3'>
                {children}
            </CardColumns>
        </Col>
    </Row>
);

const projectList = [
    {
        title: "Radar",
        description: "About the project",
        image: radar,
        github: 'https://github.com/bryang229/radar'
    },
    {
        title: "MoveTheDot",
        description: "This is an Arduino based project using two the LED Control Library. It also uses a LED Modules and a Joystick module incorporating the X and Y axis sensibility of the joystick. One of my first Arduino projects which led me to attempt different similarly styled ventures.",
        image: moveTheDot,
        github: 'https://github.com/bryang229/MoveTheDot'
    },
    {
        title: "Test Project",
        description: "About the project",
        image: java,
        github: 'https://github.com/bryang229'
    },
    {
        title: "Test Project",
        description: "About the project",
        image: java,
        github: 'https://github.com/bryang229'
    },
    {
        title: "Test Project",
        description: "About the project",
        image: java,
        github: 'https://github.com/bryang229'
    }
]

const Portfolio = () => (
    <Container>
        <PortfolioJumbotron/>
        <ProjectCollection>
            {projectList.map(el => <ProjectCard obj={el}/>)}
        </ProjectCollection>
    </Container>
);

export default Portfolio;