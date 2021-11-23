import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact py-5" id="contact">
            

            <Container>
                {/* section title  */}
                <div className='text-center'>
                    <span className="text-white bg-danger py-1 px-2">Feel free to contact me</span>
                    <h1 className=" fw-bold">Contact Me</h1>
                </div>

                {/* address  */}
                <div className="my-5">
                <Row className="text-center fs-5">
                    <Col > 
                        <div className="shadow-lg rounded p-4">
                            <p><i class="fas fa-phone-volume text-danger"></i> Phone:</p>
                            <p>+880 1515233386</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="shadow-lg rounded p-4">
                            <p><i class="fas fa-envelope text-danger"></i> Email:</p>
                            <p>mc.shakil.97@gmail.com</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="shadow-lg rounded p-4">
                            <p ><i class="fas fa-map-marker-alt text-danger "></i> Address:</p>
                            <p>Nandibari, Mymensing</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="shadow-lg rounded p-3">
                            <p><i class="fas fa-share-alt text-danger"></i> Social Media:</p>
                            <ul className="list-unstyled d-flex justify-content-center social-icons  ">
                                    <li >
                                        <a className="" href="https://www.facebook.com/mdshakil32" target="_blank"><i class="fab fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/mdshakil32" target="_blank"><i class="fab fa-github" ></i></a>
                                    </li>
                                    <li>
                                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                        </div>
                    </Col>
                </Row>
                </div>

                {/* form  */}
                <div>
                <Row className="py-5">
                    <Col className="shadow rounded">
                    <div className="p-3 ">
                    <Form>
                        {/* Name  */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control className="form-p" type="text" placeholder="Name" />
                        </Form.Group>

                        {/* email  */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control className="form-p" type="email" placeholder="Email" />
                        </Form.Group>

                        {/* Subject  */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control className="form-p " type="text" placeholder="Subject" />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control className="form-p" placeholder="Message" as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control className="form-p btn btn-danger w-25 rounded-pill mt-5" type="submit" value="Send Message" />
                        </Form.Group>

                    </Form>
                    </div>
                    </Col>

                    {/* g map  */}
                    <Col className="px-3">
                    <div className=" shadow rounded">
                        <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=mymensing,nandibari&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                    </Col>
                </Row>
            </div>
            </Container>
        </div>
    );
};

export default Contact;