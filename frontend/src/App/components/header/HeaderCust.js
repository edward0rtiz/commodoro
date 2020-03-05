import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './HeaderCust.scss';
import Logo from './commodoro_test_logo.png' ;
import { Container, Row, Col, Nav, FormControl, InputGroup} from 'react-bootstrap';
import { TiShoppingCart } from "react-icons/ti";
import { FaSearch, FaUserCircle } from "react-icons/fa";

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
              <Nav.Link href="../App" eventKey="link-1"><h3><FaUserCircle/></h3></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2"><h3><TiShoppingCart/></h3></Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col>
        <p id="slogan">Decentralized Market Place</p>
        <InputGroup size="sm" className="mb-3" id="search-bar">
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
