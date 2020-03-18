import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

/*
* @ All pages Import
*/
import Demo from './pages/Demo'
import HomeTwo from './pages/HomeTwo'
import BlogListLeftSidebar from './pages/BlogListLeftSidebar';
import BlogDetailsPage from "./pages/BlogDetails";
// import Team from "./pages/Team";
import PageProfileDetails from "./pages/ProfileDetails";
import LandingPage from "./pages/LandingPage";
import FarmForm from "./pages/FarmForm";
import Error404 from "./pages/Error404";
import ScrollToTop from "./helpers/ScrollToTop";

const App = () => {
    return (
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL + '/demo'}`} component={Demo}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/home-two'}`} component={HomeTwo}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/blog-list-left-sidebar"}`}
                           component={BlogListLeftSidebar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog/:blogID"}`} component={BlogDetailsPage}/>
                    {/* <Route exact path={`${process.env.PUBLIC_URL + "/team"}`} component={Team}/> */}
                    <Route path={`${process.env.PUBLIC_URL + "/farm-profile/:farmID"}`} component={PageProfileDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={LandingPage}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/FarmForm"}`} component={FarmForm}/>
                    <Route exact component={Error404}/>
                </Switch>
            </ScrollToTop>
        </Router>
    );
};

export default App;