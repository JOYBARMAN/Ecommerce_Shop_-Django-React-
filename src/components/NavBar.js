import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useGlobalState } from '../state/provider'


function NavBar() {
    const [{ profile }, { }] = useGlobalState()
    return (
        <Navbar expand="lg" style={{ "backgroundColor": "rgb(24, 68, 39)" }}>
            <Container fluid>
                <Navbar.Brand href="/" className='fw-bold text-white'>Ecommerce Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <input type="text" className='form-control w-75 mx-lg-3 mt-2 mt-lg-0' placeholder='Search Here' />

                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#" className='text-white'>Cart</Nav.Link>

                        {profile !== null ? (
                            <NavDropdown title={profile.prouser.username} id="basic-nav-dropdown" style={{"color":"white"}}>
                                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Nav.Link href="/login" className='text-white'>Login</Nav.Link>
                        )}



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;