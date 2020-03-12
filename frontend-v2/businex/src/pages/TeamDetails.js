import React,{Fragment} from 'react';
import Header from "../components/Header";
import TeamDetailsPage from "../templates/TeamDetails";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import SlickBar from "../components/SlickBar";

const PageTeamDetails = () => {
    return (
        <Fragment>
            <Header/>
            <TeamDetailsPage/>
            <SlickBar />
            {/* <BrandLogo/> */}
            <Funfact classes="sp-top"/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageTeamDetails;