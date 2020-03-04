import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ReadMore from '../readmore/ReadMore';

const ContentCust = () =>
  <div className="content-container">
    <Container fluid>
      <Row>
        <Col sm={8}>
          <div className="container">
            <div className="row">
              <div className="card mb-3 card-cont-cust">
                <div className="row no-gutters">
                  <div className="col-md-3">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src="./02.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="./02.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="./02.jpg" className="d-block w-100" alt="..." />
                        </div>
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title">Las Pulgas</h5>
                      {/* <p className="card-text">Acevedo is a municipality located in the south-easternmost corner of the Huila department of Colombia. Wedged in the fork between the central and eastern cordilleras (mountain ranges) where the Colombian Andes, coming up from the south, split into three distinct mountain ranges (the western, central and eastern cordilleras). Just beyond the central and eastern cordillera convergence is jungle and thus, moist, cool air.<span id="dots">...</span><span id="more"> The affect that this has on Acevedo microclimates is that of a simulated increase in elevation—there is a wide diversity in humidity, temperature and rainfall—leading to differing but ideal coffee-growing conditions. The variety found in the cup profiles coming from Acevedo reflect its array of microclimates.</span></p> */}
                      <ReadMore />
                      <button onclick="myFunction()" id="myBtn">Read more</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Second Card */}
            <div className="card mb-3 card-cont-cust">
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
          </div>
        </Col>
        <Col sm={4}>sm=4</Col>
      </Row>
    </Container>
  </div>

export default ContentCust;