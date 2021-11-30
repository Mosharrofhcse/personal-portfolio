import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Link className="logo" to="/"><span>Mosharrof </span>Hossen</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/portfolio">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        <a target="_blank" className="btn btn-primary" href="https://drive.google.com/file/d/1gV7s5I4DzURFGu3YurjXWHWY-4mxq-XH/view?usp=sharing" rel="noopener noreferrer">download resume</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;