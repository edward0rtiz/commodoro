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
          <Navbar id="header-navbar">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features"> Create </Nav.Link>
              <Nav.Link href="#shop"><TiShoppingCart /></Nav.Link>
            </Nav>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default"> <FaSearch /> </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      </Row>
    </Container>
  </header>

export default HeaderCust;
