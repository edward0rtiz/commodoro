import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import LandingPage from "../components/LandingPage/home-two";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import Features from "../components/Features";
import Testimonial from "../components/Testimonials/home-two";
import Team from "../components/Team/home-two";
import Services from "../components/Services";
// eslint-disable-next-line
import BrandLogo from "../components/BrandLogo";

import ServiceThumb from '../assets/img/about.jpg'

const PageLandingPage = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../assets/img/landing.jpg')}
                title="Commodoro"
                content= {<h3 className="text-landing"> Welcome to the largest network of coffee farmers </h3>}
            />
            <LandingPage
                thumb={ServiceThumb}
            />
            <Services/>
            <Features classes={'sm-top'}/>
            <Testimonial/>
            <Team/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageLandingPage;