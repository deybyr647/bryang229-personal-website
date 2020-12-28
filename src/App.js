import './App.css';
import logo from './images/Logo.svg'

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { useState } from 'react';
import {Nav, Navbar, Image, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'

import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import About from './pages/about';

const Navigation = () => {
  const [theme, setTheme] = useState(false);

  const themeHandler = (e) => {
    e.preventDefault();
    setTheme(!theme);

    !theme ? document.body.className = 'dark' : document.body.className = '';
  }

  return(
    <Navbar variant='light' expand="lg" className=''>
      <Navbar.Brand as={Link} to='/'><Image width="50px" src={logo}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="heading font-weight-bold">
          <Nav.Link as={Link} to='/portfolio'>Portfolio</Nav.Link>
          <Nav.Link as={Link} to='/resume'>Resume</Nav.Link>
          <Nav.Link as={Link} to='/about'>About</Nav.Link>
          <Nav.Link as={Button} onClick={themeHandler} className='bg-transparent border-0 mr-auto'><FontAwesomeIcon icon={faMoon}/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const Footer = () => (
  <Nav className='sticky-bottom justify-content-center'>
      <Nav.Link className='f heading font-weight-bold' href='https://deybyr647.com' target='_blank' rel='noopener noreferrer'>
        &copy; 2020 | Deyby Rodriguez
      </Nav.Link>
  </Nav>
)

const App = () => (
  <Router>
    <Navigation/>

    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/about' component={About}/>
    </Switch>

    <Footer/>
  </Router>
)

export default App;
