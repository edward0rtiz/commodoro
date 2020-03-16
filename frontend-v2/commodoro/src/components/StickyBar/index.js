import React from 'react';
import "./StickyBar.scss"
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const StickyBar = (props) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="sidebar-item">
                    <div className="box-hightlight">
                    <Card bg="light" style={{ width: '20rem' }}>
                        <Card.Header>
                            <Container className="text-center">
                                <Row>
                                    <Col><b>Price</b></Col>
                                    <Col><b>$ {props.price} USD/ kg</b></Col>
                                </Row>
                            </Container>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                            <Container>
                                <Row>
                                    <Col>Available</Col>
                                    <Col className="value-result">20 x 50kg bag</Col>
                                </Row>
                                <Row>
                                    <Col>Min. Order</Col>
                                    <Col className="value-result">1 x 50kg bag</Col>
                                </Row>
                                <Row>
                                    <Col>Packaging</Col>
                                    <Col className="value-result">Grainpro</Col>
                                </Row>
                                <Row>
                                    <Col>Status</Col>
                                    <Col className="value-result">Spot</Col>
                                </Row>
                                <Row>
                                    <Col>Warehouse</Col>
                                    <Col className="value-result">Coodecafe Ltda</Col>
                                </Row>
                            </Container>
                            </Card.Text>
                            <Button variant="link" className="text-right">Add to cart</Button>
                            <Col>
                                <Row className="button-order-wrapper">
                                    <Button variant="success" className="btn-sticky main" size="sm" block active>
                                        Order Sample
                                    </Button>
                                    <Button variant="secondary" className="btn-sticky" size="sm" block active>
                                        Contact Seller
                                    </Button>
                                </Row>
                            </Col>
                        </Card.Body>
                    </Card>
                    </div>
                </div>         
            </div>
        </div>
    );
};

export default StickyBar;