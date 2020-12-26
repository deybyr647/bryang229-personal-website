import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import {Nav, Navbar, Image} from 'react-bootstrap';

import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

import logo from './images/Logo.svg'

const Navigation = () => (
  <Navbar variant='light' expand="lg">
    <Navbar.Brand as={Link} to='/'><Image width="50px" src={logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="heading font-weight-bold">
        <Nav.Link as={Link} to='/portfolio'>Portfolio</Nav.Link>
        <Nav.Link as={Link} to='/resume'>Resume</Nav.Link>
        <Nav.Link as={Link} to='/about'>About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
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

    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/resume' component={Resume}/>
    </Switch>

    <Footer/>
  </Router>
)

export default App;
