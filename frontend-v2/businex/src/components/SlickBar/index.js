import React, { Component } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import Pictures from '../../assets/img/farms/others/Slide';
import { Row, Col, Container } from 'react-bootstrap';

export default class SlickBar extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Container>
  <Row>
    <Col>
    <h4> Farm Pictures </h4>
        <Slider {...settings}>
        <div>
          {
            Pictures.map(pic => (
            // <p>{pic.picSrc}</p>
            <img key={pic.id} src={require(`${pic.picSrc}`)} alt="" className="img-responsive"/>
            // <img key={pic.id} src={require('../../assets/img/farms/others/1.jpeg')} alt="" className="img-responsive"/>

            ))
          }
          </div>
        </Slider>
    </Col>
  </Row>
</Container>
    );
  }
}
