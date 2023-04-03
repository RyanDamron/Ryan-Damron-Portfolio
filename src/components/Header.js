import React from 'react';
import {Link} from 'react-router-dom';
import './styles/HeaderStyles.css';
import '../components/styles/FontStyles.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import About from '../pages/About';
// import Contact from '../pages/About';
// import Home from '../pages/Home';




function Header() {
  // const [currentPage, setCurrentPage] = useState('Home');
  // const renderPage = () => {
  //   if (currentPage === 'About') {
  //     return <About/>;
  //   }
  //   if (currentPage === 'Contact') {
  //     return <Contact/>
  //   }
  // };
  // const handlePageChange = (page) => setCurrentPage(page)
  return (


    <div className='shadow-sm d-flex flex-wrap justify-content-between' id='header-name'>
      <div>
        <Link to='/home' className='google-font-1 ms-4' id='header' >Ryan Damron</Link>
        <p className='google-font-2' id='header-p'>Full-Stack MERN Web Developer</p>
      </div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" activeKey="Home">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Me</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://us-opencourts.herokuapp.com/" target="_blank" rel="noreferrer">US OpenCourts</NavDropdown.Item>
                <NavDropdown.Item href="https://ryandamron.github.io/Weather-Voyage/" target="_blank" rel="noreferrer">
                  Weather Voyage
                </NavDropdown.Item>
                <NavDropdown.Item href="https://crothos.github.io/flashcard-app/" target="_blank" rel="noreferrer">FlashFacts</NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/RyanDamron/Text-Editor" target="_blank" rel="noreferrer">
                  Just Another Text Editor
                </NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/RyanDamron/Social-Network-API" target="_blank" rel="noreferrer">
                  Social Network API
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://github.com/RyanDamron" target="_blank" rel="noreferrer">
                  GitHub
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
};

export default Header;