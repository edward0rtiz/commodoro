import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './NavCommodity.scss';
import { Nav } from 'react-bootstrap';


const NavCommodity  = () => {
        return (
            <div id="nav-c">
                <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Cotton</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home" eventKey="link-1">Cocoa</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home" eventKey="link-2">Avocado</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home" eventKey="link-3">Sugar Cane</Nav.Link>
                </Nav.Item>
                </Nav>    
            </div>
    )
}

export default NavCommodity;