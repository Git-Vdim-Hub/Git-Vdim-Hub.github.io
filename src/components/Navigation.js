import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation({currentPage, handlePageChange}){
    return(
      <Navbar bg="dark" expand="lg" variant="light">
      <Container>
        <Navbar.Brand className="text-light fs-3" href="#home">Vadim Race</Navbar.Brand>
        <Navbar.Toggle className="border-white navbar-light" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav text="light">
            <Nav.Link href="#about"
                       onClick={() => handlePageChange('About')}
                      
                       className={currentPage === 'About' ? 'nav-link active text-light' : 'nav-link text-light'}
                       >
                         About</Nav.Link>
            <Nav.Link href="#portfolio"
                       onClick={() => handlePageChange('Portfolio')}
                       className={currentPage === 'Portfolio' ? ' nav-link active text-light' : 'nav-link text-light'} 
                       >
                         Portfolio</Nav.Link>
            <Nav.Link href="#resume"
                       onClick={() => handlePageChange('Resume')}
                       className={currentPage === 'Resume' ? ' nav-link active text-light' : 'nav-link text-light'} 
                       >
                         Resume</Nav.Link>
            <Nav.Link href="#contact"
                       onClick={() => handlePageChange('Contact')}
                       className={currentPage === 'Contact' ? 'dropdown-item nav-link active text-light' : 'nav-link text-light'} 
                       >
                         Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
    
    
}