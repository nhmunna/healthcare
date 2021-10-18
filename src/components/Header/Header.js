import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, handleSignOut } = useAuth();

    // const { user, handleSignOut } = useFirebase();
    console.log(user)
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Health Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/doctor">Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                        {
                            user?.email ? <Button onClick={handleSignOut} variant="light">logout</Button>
                                : <Nav.Link as={Link} to="/login">login</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;