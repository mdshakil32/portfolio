import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Banner.css";
import shakil from "../../images/shakil.png"
const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Row>
                    {/* profile img  */}
                    <Col  >
                        <img className="w-100" src={shakil} alt="" />
                    </Col>

                    {/* profile info  */}
                    <Col className="text-white d-flex align-items-center " >
                        <div className="text-center">
                            <h4>Hey, There!</h4>
                            <h1 className="fw-bold my-3" >I am <span className="text-danger">Md Shakil Chowdhury</span> </h1>
                            <h1 className="fw-bold my-4" >A <span className="text-danger"> Web Developer </span></h1>
                            <p>I do use React Js to develop a website. For database I use Mongo DB.</p>
                            <ul className="list-unstyled d-flex justify-content-center social-icons  ">
                                <li >
                                    <a className="" href=""><i class="fab fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href=""><i class="fab fa-github"></i></a>
                                </li>
                                <li>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;