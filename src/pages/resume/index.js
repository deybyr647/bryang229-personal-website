import {Col, Row, Container, Jumbotron, ResponsiveEmbed} from 'react-bootstrap';

import resumePDF from './Profile.pdf';
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
        <Row>
            <Col>
                <Jumbotron className='p-3'>
                    <ResumeDoc/>
                </Jumbotron>
            </Col>
        </Row>
    </Container>
);

export default Resume;