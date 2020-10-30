import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import {Nav, Navbar} from 'react-bootstrap';

import Home from './pages/home';

const Navigation = () => (
  <>
  <Navbar variant='light' expand="lg">
    <Navbar.Brand as={Link} to='/'>Bryan Bonilla Garay</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="font-weight-bold">
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

const App = () => (
  <Router>
    <Navigation />
  </Router>
)

export default App;
