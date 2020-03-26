import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

// Images Import
import logo from '../../assets/img/commodoro_logo.png'
import heroBg from '../../assets/img/demo-page/slider-bg.jpg'
import home2 from '../../assets/img/demo-page/pages/home-2.jpg'
import about from '../../assets/img/demo-page/pages/about.jpg'
import team from '../../assets/img/demo-page/pages/team.jpg'
import teamDetails from '../../assets/img/demo-page/pages/team-details.jpg'
import blogListLeft from '../../assets/img/demo-page/pages/blog-l-l.jpg'
import blogDetails from '../../assets/img/demo-page/pages/blog-details.jpg'
import contact from '../../assets/img/demo-page/pages/contact.jpg'
import '../../components/Header/Logo.scss'


class DemoPage extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.isSticky);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.isSticky);
    }

    isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };

    render() {
        return (
            <Fragment>
                <div className="header-section section fixed-top">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-6">
                                <div className="logo-area">
                                    <img src={logo} alt="comoodoro-logo"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="buy-btn-area text-right">
                                    <a className="btn-outline d-inline-block"
                                       href={`${process.env.PUBLIC_URL + "/"}`}>Return Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-section" style={{backgroundImage: `url(${heroBg})`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10 m-auto">
                                <div className="hero-content-wrap">
                                    <div className="hero-content text-center">
                                        <h1><strong>Commodoro</strong> Commodoro Testing Suite</h1>
                                        <p>Commodoro React Template.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="demo-section sm-top-wt" id="demo-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-style">
                                    <div className="section-title">
                                        <h2>Home page Layouts</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mtn-20">
                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <Link to={`${process.env.PUBLIC_URL + "/home-two"}`} className="image" target="_blank">
                                        <img src={home2} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </Link>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/home-two"}`} target="_blank" rel="noopener noreferrer">Home Layout 2</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="demo-section sm-top-wt">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-style">
                                    <div className="section-title">
                                        <h2>Other pages</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mtn-20">
                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <a href={`${process.env.PUBLIC_URL + "/about"}`} className="image" target="_blank" rel="noopener noreferrer">
                                        <img src={about} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/about"}`} target="_blank" rel="noopener noreferrer">About</a>
                                    </h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <a href={`${process.env.PUBLIC_URL + "/team"}`} className="image" target="_blank" rel="noopener noreferrer">
                                        <img src={team} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/team"}`} target="_blank" rel="noopener noreferrer">Team</a>
                                    </h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <a href={`${process.env.PUBLIC_URL + "/farm-profile/las-margaritas?id=1"}`} className="image" target="_blank" rel="noopener noreferrer">
                                        <img src={teamDetails} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/farm-profile/las-margaritas?id=1"}`} target="_blank" rel="noopener noreferrer">FarmDetails</a>
                                    </h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <a href={`${process.env.PUBLIC_URL + "/blog-list-left-sidebar"}`} className="image" target="_blank" rel="noopener noreferrer">
                                        <img src={blogListLeft} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/blog-list-left-sidebar"}`} target="_blank" rel="noopener noreferrer">Blog List Left Sidebar</a>
                                    </h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <a href={`${process.env.PUBLIC_URL + "/new-business-strategy?id=1"}`} className="image" target="_blank" rel="noopener noreferrer">
                                        <img src={blogDetails} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/new-business-strategy?id=1"}`} target="_blank" rel="noopener noreferrer">Blog
                                        Details</a>
                                    </h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <a href={`${process.env.PUBLIC_URL + "/FarmForm"}`} className="image" target="_blank" rel="noopener noreferrer">
                                        <img src={contact} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/FarmForm"}`} target="_blank" rel="noopener noreferrer">FarmForm</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-section bg-brand">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-content text-center">
                                    <h3>Commodoro Demo Page.</h3>
                                    <a className="btn-outline"
                                       href={`${process.env.PUBLIC_URL + "/"}`}
                                       target="_blank" rel="noreferrer noopener">Return Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default DemoPage;