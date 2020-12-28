import {Col, Row, Container, Jumbotron, ResponsiveEmbed} from 'react-bootstrap';

import resumePDF from './Resume.pdf';
import './resume.css';

const ResumeDoc = () => (
    <ResponsiveEmbed>
        <Container fluid className='bg-white'>
            <object data={resumePDF} width='100%' height='auto' type='application/pdf' className='pdf'>
                <p>My Resume</p>
            </object>
        </Container>
    </ResponsiveEmbed>
)

const Resume = () => (
    <Container className='mt-4'>
        <Row className='text-center mb-3'>
            <Col>
                <h2 className='text-secondary'>My Resume</h2>
            </Col>
        </Row>

        <Row>
            <Col>
                <Jumbotron className='p-3'>
                    <ResumeDoc/>
                </Jumbotron>
            </Col>
        </Row>

        <Row className='text-center mb-3'>
            <Col>
                <h2><a href='https://google.com' className='text-decoration-none text-secondary'>View In A New Tab</a></h2>
            </Col>
        </Row>
    </Container>
);

export default Resume;