import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ReadMore from '../readmore/ReadMore';
import StickyBar from '../stickybar/StickyBar';
import CarouselPic from '../carouselpic/CarouselPic';
import './ContentCust.scss';
import axios from 'axios';

class ContentCust extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coffeeName: '',
      description: '',
      coffeeVariety: '',
      coffeeProcessing: '',
      coffeeCropYear: '',
      coffeeCoupingScore: '',
    };
  }

  componentDidMount () {
    axios('http://127.0.0.1:8000/api/v1/farms/4/')
    .then(result => this.setState({coffeeName: result.data.farm_name,
    description: result.data.description,
    coffeeVariety: result.data.farm_coffee[0].variety,
    coffeeProcessing: result.data.farm_coffee[0].processing,
    coffeeCropYear: result.data.farm_coffee[0].crop_year,
    coffeeCoupingScore: result.data.farm_coffee[0].couping_score,
    coffeePrice: result.data.farm_coffee[0].price,
  }))
    .catch(error => error );
  }

  render () {
    return (
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
                          <h5 className="card-title">{this.state.coffeeName}</h5>
                          <h6 className="user-text"> Offered by </h6>
                          <ReadMore description={this.state.description}/>
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
                          <p className="card-text">Variety: {this.state.coffeeVariety}</p>
                          <p className="card-text">Procesing: {this.state.coffeeProcessing}</p>
                          <p className="card-text">Crop year: {this.state.coffeeCropYear}</p>
                          <p className="card-text">Couping score: {this.state.coffeeCoupingScore}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Second Card */}
                </div>
              </div>
            </Col>
            <Col sm={4}>
            <StickyBar price={this.state.coffeePrice}/>
            </Col>
          </Row>
        </Container >
      </div>
      )
    }
}

export default ContentCust;