import React,{Fragment} from 'react';
import Header from "../components/Header";
import ProfileDetailsPage from "../templates/ProfileDetails";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

// This Page contain the profile of the farmer
const PageProfileDetails = () => {
    return (
        <Fragment>
            <Header/>
            {/* Unique component for this page */}
            <ProfileDetailsPage/>
            <Funfact classes="sp-top"/>
            <CallToAction/>
            <Footer/>
            {/* Login hidden sider, shown when user click the login button */}
            <LoginRegister/>
        </Fragment>
    );
};

export default PageProfileDetails;