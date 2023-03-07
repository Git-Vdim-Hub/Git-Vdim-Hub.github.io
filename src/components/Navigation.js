// Uses bootstrap-react Container, Nav and Navbar dependencies
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// Navigation component is used to conditionally render About Me, Portfolio, Contact and Resume sections
//  Recieves currentPage and handlePageChange as props from Header
export default function Navigation({currentPage, handlePageChange}){
    return(
      <Navbar bg="dark" expand="lg" variant="light">
      <Container>
        <Navbar.Brand className="text-light fs-3" href="#home">Vadim Race</Navbar.Brand>
        <Navbar.Toggle className="border-white navbar-light" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav text="light">
            {/* Conditional Rendering between the four tabs/sections changing the state of currentPage*/}
            <Nav.Link href="#about"
                       onClick={() => handlePageChange('About')}
                      
                       className={currentPage === 'About' ? 'nav-link active text-warning' : 'nav-link text-warning'}
                       >
                         About</Nav.Link>
            <Nav.Link href="#portfolio"
                       onClick={() => handlePageChange('Portfolio')}
                       className={currentPage === 'Portfolio' ? ' nav-link active text-warning' : 'nav-link text-warning'} 
                       >
                         Portfolio</Nav.Link>
            <Nav.Link href="#resume"
                       onClick={() => handlePageChange('Resume')}
                       className={currentPage === 'Resume' ? ' nav-link active text-warning' : 'nav-link text-warning'} 
                       >
                         Resume</Nav.Link>
            <Nav.Link href="#contact"
                       onClick={() => handlePageChange('Contact')}
                       className={currentPage === 'Contact' ? 'dropdown-item nav-link active text-warning' : 'nav-link text-warning'} 
                       >
                          Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
    
    
}