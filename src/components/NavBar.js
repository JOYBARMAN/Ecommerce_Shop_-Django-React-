import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar expand="lg" style={{ "backgroundColor": "rgb(24, 68, 39)" }}>
            <Container fluid>
                <Navbar.Brand href="/" className='fw-bold text-white'>Ecommerce Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <input type="text" className='form-control w-75 mx-lg-3 mt-2 mt-lg-0' placeholder='Search Here'/>
                    
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#" className='text-white'>Cart</Nav.Link>
                        <Nav.Link href="#" className='text-white'>UserName</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;