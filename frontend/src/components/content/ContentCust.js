import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ReadMore from '../readmore/ReadMore';
import StickyBar from '../stickybar/StickyBar';
import CarouselPic from '../carouselpic/CarouselPic';
import './ContentCust.scss';

const ContentCust = () =>
  <div className="content-container">
    <Container fluid>
      <Row>
        <Col sm={8} id="main-content-container">
          <div className="container">
            <div className="row">
              {/* First Card */}
              <div className="card mb-3 card-cont-cust" id="card-main-info">
                <div className="row no-gutters">
                  <div className="col-md-3">
                    <CarouselPic />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title">Las Pulgas</h5>
                      <h6 className="user-text"> Offered by </h6>
                      <ReadMore />
                    </div>
                  </div>
                </div>
              </div>
              {/* End First Card */}
              {/* Second Card */}
              <div className="card mb-3 card-cont-cust" id="card-sub-info">
                <div className="row no-gutters">
                  <div className="col-md-3">
                    <h5 className="card-title" id="specs">General Information</h5>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <p className="card-text">Variety: Castillo, Colombia.</p>
                      <p className="card-text">Procesing: washed.</p>
                      <p className="card-text">Crop year: 2020.</p>
                      <p className="card-text">Couping score: 87.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Second Card */}
            </div>
          </div>
        </Col>
        <Col sm={4}>
        <StickyBar />
        </Col>
      </Row>
    </Container>
  </div>

export default ContentCust;