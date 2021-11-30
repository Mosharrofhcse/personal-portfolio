import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../images/image-2.jpg';
import './About.css'

const About = () => {

    return (
        <div className="about-area">
            <Container>
                <div className="section-title">
                    <h2>ABOUT <span>ME</span></h2>
                    <p>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
                </div>
                <Row className="align-items-center">
                    <Col lg={7} md={7}>
                        <div className="about-info">
                            <ul>
                                <li>First Name <span>Mosharrof</span></li>
                                <li>Last Name <span>Hossen</span></li>
                                <li>Birthdate <span>15 Oct 1986</span></li>
                                <li>Nationality <span>Bangladesi</span></li>
                                <li>Experience <span>1 year+</span></li>
                            </ul>
                            <ul>
                                <li>Address <span>dhaka</span></li>
                                <li>Langages <span>bangla, english</span></li>
                                <li>Phone <span>+8801684669397</span></li>
                                <li>Email <span>mosharrofhcse@gmail.com</span></li>
                                <li>Github <span>https://github.com/mosharrofhcse</span></li>
                            </ul>
                        </div>
                        <div className="about-btn">
                            <button className="regular-btn">more about me</button>
                        </div>
                    </Col>
                    <Col lg={5} md={5}>
                        <div className="about-right">
                            <div className="about-Thumb">
                                <img src={myImg} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;