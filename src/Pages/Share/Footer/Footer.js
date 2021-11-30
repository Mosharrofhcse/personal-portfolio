import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg">
            <Container>
                <Row>
                    <div className="footer-wrapper">
                        <p>&copy; Copyright 2021. Mosharrof Hossen, All rights reserved.</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;