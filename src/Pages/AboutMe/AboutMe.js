import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <div id="about-me" className="py-5" >
            
            <Container >
                <h1  className="text-center my-5">About Me</h1>
                <Row>
                    <Col xs={12} >
                        <p>Recently completed Bachelor degree in Computer Science & Engineering from Primeasia University. 
                        Hard-working, looking to apply for experience to a job in web development. Junior web development specializing in full stack development. Or Frontend design.</p>
                    </Col>
                    <Col xs={12} md={6}>
                       <div className="rounded">
                            <h1 className=" text-center border-bottom border-danger">Education</h1>
                            <ul className="bullet-list mt-5">
                                <li className="bullet-item mt-0">
                                    <h2 >Bachelor's Degree</h2>
                                    <p className="fw-bold">Year: 2021</p>
                                    <p className="fw-bold">Department: CSE</p>
                                </li>

                                <li className="bullet-item">
                                    <h2>HSC</h2>
                                    <p className="fw-bold">Year: 2016</p>
                                    <p className="fw-bold">Section: Science</p>
                                </li>

                                <li className="bullet-item">
                                    <h2>SSC</h2>
                                    <p className="fw-bold">Year: 2014</p>
                                    <p className="fw-bold">Section: Science</p>
                                </li>
                                
                                
                            </ul>
                       </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h1 className=" text-center border-bottom border-danger">Skills</h1>
                        <div className="mb-4 mt-5">
                            <h5>HTML</h5>
                            <ProgressBar animated  variant="danger" now={95} label="95%"  />
                        </div>
                        <div className="mb-4">
                            <h5>CSS (Responsive) </h5>
                            <ProgressBar animated  variant="danger" now={95} label="95%"  />
                        </div>
                        <div className="mb-4">
                            <h5>Javascript</h5>
                            <ProgressBar animated  variant="danger" now={90} label="90%"  />
                        </div>
                        <div className="mb-4">
                            <h5>React JS</h5>
                            <ProgressBar animated  variant="danger" now={85} label="85%"  />
                        </div>
                        <div className="mb-4">
                            <h5>Node JS</h5>
                            <ProgressBar animated  variant="danger" now={80} label="80%"  />
                        </div>
                        <div className="mb-4">
                            <h5>Bootstrap/React Bootstrap</h5>
                            <ProgressBar animated  variant="danger" now={95} label="95%"  />
                        </div>
                        <div className="mb-4">
                            <h5>Tailwind CSS</h5>
                            <ProgressBar animated  variant="danger" now={95} label="95%"  />
                        </div>
                        <div className="mb-4">
                            <h5>Material-UI</h5>
                            <ProgressBar animated  variant="danger" now={90} label="90%"  />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;