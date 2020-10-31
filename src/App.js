import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import {Nav, Navbar, Image} from 'react-bootstrap';

import Home from './pages/home';

import logo from './images/Logo.svg'

const Navigation = () => (
  <>
  <Navbar variant='light' expand="lg">
    <Navbar.Brand as={Link} to='/'><Image width="50px" src={logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="heading font-weight-bold">
        <Nav.Link as={Link} to='/about'>About</Nav.Link>
        <Nav.Link as={Link} to='/portfolio'>Portfolio</Nav.Link>
        <Nav.Link as={Link} to='/resume'>Resume</Nav.Link>
        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  <Switch>
    <Route exact path='/' component={Home}/>
  </Switch>
  </>
)

const Footer = () => (
  <Nav className='sticky-bottom justify-content-center'>
      <Nav.Link className='text-body heading font-weight-bold' href='https://deybyr647.com' target='_blank' rel='noopener noreferrer'>
        &copy; 2020 | Deyby Rodriguez
      </Nav.Link>
  </Nav>
)

const App = () => (
  <Router>
    <Navigation />
    <Footer/>
  </Router>
)

export default App;
