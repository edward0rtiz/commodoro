import React from 'react';
import "./Footer.scss"

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col">
                        <h4>Get to know Us</h4>
                        <ul className="list-unstyled">
                            <h6>
                            <li>About Commodoro</li>
                            <li>Contact</li>
                            <li>Team</li>
                            <li>Careers</li>
                            </h6>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col">
                            <h4>Why Commodoro</h4>
                            <ul className="list-unstyled">
                                <h6>
                                <li>What is a descentralized market</li>
                                <li>How to buy as a consumer</li>
                                <li>How to sell as a seller</li>
                                <li>About real-time transactions</li>
                                <li>About market analytics</li>
                                </h6>
                            </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="col">
                            <h4>Commodoro social</h4>
                            <ul className="list-unstyled">
                                <h6>
                                <li>LinkedIn</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                </h6>
                            </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{(new Date().getFullYear())} Commodoro inc | All rights reserved | Terms of Service | Privacy
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Footer;