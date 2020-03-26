import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

/*
* @ All pages Import
*/

import Demo from './pages/Demo'
import PageProfileDetails from "./pages/ProfileDetails";
import LandingPage from "./pages/LandingPage";
import FarmForm from "./pages/FarmForm";
import Error404 from "./pages/Error404";
import ScrollToTop from "./helpers/ScrollToTop";

// App with router show the urls available and the corresponding components
const App = () => {
    return (
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL + '/demo'}`} component={Demo}/>                    
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