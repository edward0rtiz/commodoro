import React from 'react';
import parse from "html-react-parser";
import landingPageData from "../../../data/LandingPage/home-two";
import landingThumb from '../../../assets/img/landingtwo.jpg'
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="home-two-about-area" style={{backgroundImage:`url(${landingThumb})`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 d-lg-none">
                        <figure className="about-thumb">
                            <img src={require('../../../assets/img/' + landingPageData.thumb)} alt="commodoro-landing"/>
                        </figure>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content about-content--2">
                            {/* <h6>{landingPageData.title}</h6> */}
                            <h2>{parse(landingPageData.heading)}</h2>
                            {/* <span className="about-since">{landingPageData.since}</span> */}
                            <p>{parse(landingPageData.text)}</p>
                            <Link to={`${process.env.PUBLIC_URL + landingPageData.btnLink}`} className="btn-landing">{landingPageData.btnText} <i className="fa fa-angle-double-right"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
