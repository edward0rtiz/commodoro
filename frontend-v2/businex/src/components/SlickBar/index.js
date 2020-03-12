import React, { Component } from "react";
import Slider from "react-slick";
import Pictures from './Slide';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

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
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
        <div>
          {
            Pictures.map(pic => (
            // <p>{pic.picSrc}</p>
            <img key={pic.id} src={require(`${pic.picSrc}`)}/>
            ))
          }
          </div>
        </Slider>
      </div>
    );
  }
}
