import React,{Fragment} from 'react';
import Header from "../components/Header";
import ProfileDetailsPage from "../templates/ProfileDetails";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import SlickBar from "../components/SlickBar";

const PageProfileDetails = () => {
    return (
        <Fragment>
            <Header/>
            <ProfileDetailsPage/>
            {/* <SlickBar /> */}
            <Funfact classes="sp-top"/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageProfileDetails;