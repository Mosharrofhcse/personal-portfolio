import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProjectOne from '../../images/project-1.JPG';
import ProjectTwo from '../../images/project-2.JPG';
import ProjectThree from '../../images/project-3.JPG';
import './Project.css'

const Project = () => {
    return (
        <div className="project-area">
            <Container>
                <div className="section-title">
                    <h2>MY <span>PROJECTS</span></h2>
                    <p>RECENTLY I HAVE ACCOMPLISHED SOME PROJECTS. I WOULD LIKE TO SHARE THIS THINGS WITH YOU.</p>
                </div>
                <Row>
                    <Col lg={4}>
                        <div className="project-thumbnail">
                            <img src={ProjectOne} alt="" />
                            <div className="project-info">
                                <div className="project-inner-text">
                                    <h4>HSB Cars</h4>
                                    <p>It is a car selling website. Users and Admin can sign up and sign in to this website using an email password.</p>
                                    <button className="regular-btn btn-2">read more</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="project-thumbnail">
                            <img src={ProjectTwo} alt="" />
                            <div className="project-info">
                                <div className="project-inner-text">
                                    <h4>MediCare Plus</h4>
                                    <p>A health care website where enery patient get their desired specialist doctors. Get an appointments through online.</p>
                                    <button className="regular-btn btn-2">read more</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="project-thumbnail">
                            <img src={ProjectThree} alt="" />
                            <div className="project-info">
                                <div className="project-inner-text">
                                    <h4>Food Valley</h4>
                                    <p>It is a food delivery website. Users can sign up and orders food for instant delivery. There are lots of restaurants ready to serve food.</p>
                                    <button className="regular-btn btn-2">read more</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Project;