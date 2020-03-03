import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './HeaderCust.scss';
import Logo from './commodoro_test_logo.png' ;
import { Container, Row, Col, Nav, FormControl, Navbar, InputGroup} from 'react-bootstrap';
import { TiShoppingCart } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";

const HeaderCust = () =>
  <header className="home-header">
    <Container className="header-layout">
      <Row>
        <Col className="branding">
          <a href="#home" className="logo">
            <img src={Logo} alt="logo"/>
          </a>
          <div id="brand-text">
            <p>COMMODORO</p>
            <p>Descentralized Premium Commodities</p>
          </div>
        </Col>
        <Col>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col>
        <p id="slogan">Decentralized Market Place</p>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default"> <FaSearch /> </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        </Col>
      </Row>
    </Container>
  </header>

export default HeaderCust;
