import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import bannerImg from '../../images/image-1.jpg';

const Banner = () => {
    return (
        <div className="banner-area">
            <div className="overlay">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5}>
                            <div className="banner-img">
                                <img src={bannerImg} alt="banner-img" />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="banner-content">
                                <p className="banner-top-text">Hello !</p>
                                <h1>I'M a <span>Full Stack developer</span></h1>
                                <p className="banner-des">I am a full stack Developer. I am passionate about website design and development. I have made a lot of successful projects on websites design and development those are user friendly, and built with best practices.</p>
                                {/* <a target="_blank" className="regular-btn" href="https://drive.google.com/file/d/1EvEuQxbZOZ7hkoInXwtlgAAAzQKFxxVE/view?usp=sharing" rel="noopener noreferrer">download resume</a>
                                <button className="regular-btn btn-2">Portfolio</button> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner;