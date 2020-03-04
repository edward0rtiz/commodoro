import React from 'react';
import "./StickyBar.scss"
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap'

const StickyBar = () => {
    return (
        <div>
            <div class="container-fluid">
                <div class="sidebar-item">
                    <div class="box-hightlight">
                    <Card border="secondary" style={{ width: '20rem' }}>
                        <Card.Header>
                            <Container className="text-center">
                                <Row>
                                    <Col><b>Price</b></Col>
                                    <Col><b>$ 7.13 USD/ kg</b></Col>
                                </Row>
                            </Container>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                            <Container>
                                <Row>
                                    <Col>Price</Col>
                                    <Col>$ 7.13 USD/ kg</Col>
                                </Row>
                                <Row>
                                    <Col>Available</Col>
                                    <Col>20 x 50kg bag</Col>
                                </Row>
                                <Row>
                                    <Col>Min. Order</Col>
                                    <Col>1 x 50kg bag</Col>
                                </Row>
                                <Row>
                                    <Col>Packaging</Col>
                                    <Col>Grainpro</Col>
                                </Row>
                                <Row>
                                    <Col>Status</Col>
                                    <Col>Spot</Col>
                                </Row>
                                <Row>
                                    <Col>Warehouse</Col>
                                    <Col>Coodecafe Ltda</Col>
                                </Row>
                            </Container>
                            </Card.Text>
                            <Button variant="link" class="text-right">Add to cart</Button>
                            <Button variant="success" class="btn-flat" size="md" block active>
                                Order Sample
                            </Button>
                            <Button variant="secondary" class="btn-flat" size="md" block active>
                                Contact Seller
                            </Button>
                        </Card.Body>
                    </Card>
                    </div>
                </div>         
            </div>
        </div>
    )
}

export default StickyBar;