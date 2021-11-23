import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import "./MyWorks.css";

const MyWorks = () => {
    return (
        <div id="my-works" className="bg-light-gray py-5">
            <Container>
                <h1 className="text-center py-5">My Works</h1>


                <Row className="py-5">
                <h2>React</h2>
                {/* tralive  */}
                <Col md={3}>
                <Card style={{ width: '100%',padding:"10px" }}>
                <a href="https://tralive-5a85c.web.app/" target="_blank" > <Card.Img variant="top" src="https://i.ibb.co/C2t7dv4/xcar-png-pagespeed-ic-RMwq-CTkt-Un.webp" /> </a>    
                <Card.Body>
                    <Card.Title>Tralive</Card.Title>
                    <Card.Text >
                     React, MongoDb & Firebase authentication
                    </Card.Text>

                    <a className="text-success" href="https://github.com/mdshakil32/tralive-tourism" target="_blank">Client side code</a> <br/>
                    <a className="text-danger" href="https://github.com/mdshakil32/tralive-tourism-server" target="_blank">Server side code</a>
                </Card.Body>
                </Card>
                </Col>

                {/* cycling  */}
                <Col md={3}>
                <Card style={{ width: '100%',padding:"10px" }}>
                <a href="https://cycling-bfa44.web.app/" target="_blank" > <Card.Img variant="top" src="https://i.ibb.co/Hg7Xv5b/banner-bicycle.png" /> </a>    
                <Card.Body>
                    <Card.Title>Cycling</Card.Title>
                    <Card.Text >
                    React, MongoDb & Firebase authentication
                    </Card.Text>

                    <a className="text-success" href="https://github.com/mdshakil32/cycling" target="_blank">Client side code</a> <br/>
                    <a className="text-danger" href="https://github.com/mdshakil32/cycling-server" target="_blank">Server side code</a>
                </Card.Body>
                </Card>
                </Col>

                {/* doctors portal  */}
                <Col md={3}>
                <Card style={{ width: '100%',padding:"10px" }}>
                <a 
                href="https://doctors-portal-2904f.web.app/" 
                target="_blank" > 
                <Card.Img 
                    variant="top" 
                    src="https://doctors-portal-2904f.web.app/static/media/chair.3ca333d1.png" />
                </a>    
                <Card.Body>
                    <Card.Title>Doctors Portal</Card.Title>
                    <Card.Text >
                     React, MongoDb & Firebase authentication
                    </Card.Text>

                    <a className="text-success" href="https://github.com/mdshakil32/doctors-portal" target="_blank">Client side code</a> <br/>
                    <a className="text-danger" href="https://github.com/mdshakil32/-doctors-portal-server" target="_blank">Server side code</a>
                </Card.Body>
                </Card>
                </Col>

                {/* dental Care  */}
                <Col md={3}>
                <Card style={{ width: '100%',padding:"10px" }}>
                <a href="https://dental-care-a6972.web.app/home" target="_blank" > 
                <Card.Img 
                    variant="top" 
                    src="https://i.ibb.co/qM2ZLFv/bg.jpg" /> </a>    
                <Card.Body>
                    <Card.Title>Dental Care</Card.Title>
                    <Card.Text >
                    React, Fake DB & Firebase authentication
                    </Card.Text>

                    <a className="text-success" href="https://github.com/mdshakil32/dental-care" target="_blank">Client side code</a> <br/>
                    
                </Card.Body>
                </Card>
                </Col>

                </Row>

                {/* javascript  */}

                <Row className="py-5">
                <h2>Javascript</h2>
                
                {/* machbook  */}
                <Col md={3}>
                <Card style={{ width: '100%',padding:"10px" }}>
                <a href="https://mdshakil32.github.io/macbook/" target="_blank" > <Card.Img variant="top" src="https://mdshakil32.github.io/macbook/images/mac.png" /> </a>    
                <Card.Body>
                    <Card.Title>Mackbook</Card.Title>
                    <Card.Text >
                     Bootstrap, Javascript
                    </Card.Text>

                    <a className="text-success" href="https://github.com/mdshakil32/macbook" target="_blank">Client side code</a> <br/>
                    
                </Card.Body>
                </Card>
                </Col>

                {/* banking  */}
                <Col md={3}>
                <Card style={{ width: '100%',padding:"10px",minHeight:"370px" }}>
                <a href="https://github.com/mdshakil32/v3-bank-transaction" target="_blank" > <Card.Img variant="top" src="https://i.ibb.co/CQTMr8j/Screenshot-2021-11-23-214112.png" /> </a>    
                <Card.Body>
                    <Card.Title>Deposite & Withdraw</Card.Title>
                    <Card.Text >
                        CSS, Javascript
                    </Card.Text>

                    <a className="text-success" href="https://github.com/mdshakil32/cycling" target="_blank">Client side code</a> <br/>
                    
                </Card.Body>
                </Card>
                </Col>

                {/* calculator  */}
                <Col md={3}>
                <Card style={{ width: '100%',padding:"10px" }}>
                <a href="https://mdshakil32.github.io/Calculator-using-html-css-js/" target="_blank" > <Card.Img variant="top" src="https://i.ibb.co/tbsn1J3/Screenshot-2021-11-24-000450.png" /> </a>    
                <Card.Body>
                    <Card.Title>Calculator</Card.Title>
                    <Card.Text >
                        CSS, Javascript
                    </Card.Text>

                    <a className="text-success" href="https://github.com/mdshakil32/Calculator-using-html-css-js" target="_blank">Client side code</a> <br/>
                    
                </Card.Body>
                </Card>
                </Col>


                </Row>


                {/* CSS/Bootstrap/Tailwind  */}
                <Row className="py-5">
                <h2>CSS/Bootstrap/Tailwind </h2>
                {/* tralive  */}
                <Col md={3}>
                <Card style={{ width: '100%',padding:"10px" }}>
                <a href="https://mdshakil32.github.io/honda-cbr-modified/index.html" target="_blank" > <Card.Img variant="top" src="https://mdshakil32.github.io/honda-cbr-modified/images/header-bike.png" /> </a>    
                <Card.Body>
                    <Card.Title>Honda CBR</Card.Title>
                    <Card.Text >
                     Bootstrap,CSS
                    </Card.Text>

                    <a className="text-success" href="https://github.com/mdshakil32/honda-cbr-modified" target="_blank">Client side code</a> <br/>
                  
                </Card.Body>
                </Card>
                </Col>

                {/* Panda Ecom  */}
                <Col md={3}>
                <Card style={{ width: '100%',padding:"10px" }}>
                <a href="https://mdshakil32.github.io/panda-ecommerce-js/#" target="_blank" > <Card.Img variant="top" src="https://mdshakil32.github.io/panda-ecommerce-js/images/banner-images/tv.png" /> </a>    
                <Card.Body>
                    <Card.Title>Panda Ecom</Card.Title>
                    <Card.Text >
                    Bootstrap,CSS
                    </Card.Text>

                    <a className="text-success" href="https://github.com/mdshakil32/panda-ecommerce-js" target="_blank">Client side code</a> <br/>
                   
                </Card.Body>
                </Card>
                </Col>

                {/* Escape  */}
                <Col md={3}>
                <Card style={{ width: '100%',padding:"10px",minHeight:"370px" }}>
                <a 
                href="https://mdshakil32.github.io/Escape/" 
                target="_blank" > 
                <Card.Img 
                    variant="top" 
                    src="https://mdshakil32.github.io/Escape/images/banner.png" />
                </a>    
                <Card.Body>
                    <Card.Title>Escape</Card.Title>
                    <Card.Text >
                     Bootstrap,CSS
                    </Card.Text>

                    <a className="text-success" href="https://github.com/mdshakil32/Escape" target="_blank">Client side code</a> <br/>
                    
                </Card.Body>
                </Card>
                </Col>

                {/* food diet  */}
                <Col md={3}>
                <Card style={{ width: '100%',padding:"10px" }}>
                <a href="https://mdshakil32.github.io/food-diet/" target="_blank" > 
                <Card.Img 
                    variant="top" 
                    src="https://mdshakil32.github.io/food-diet/images/food/Project%20Cover.png" /> </a>    
                <Card.Body>
                    <Card.Title>Dental Care</Card.Title>
                    <Card.Text >
                    React, Fake DB & Firebase authentication
                    </Card.Text>

                    <a className="text-success" href="https://github.com/mdshakil32/food-diet" target="_blank">Client side code</a> <br/>
                    
                </Card.Body>
                </Card>
                </Col>

                

                </Row>

            </Container>
        </div>
    );
};

export default MyWorks;