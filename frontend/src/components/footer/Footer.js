import React from 'react';
import "./Footer.scss"

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col">
                        <h5s>Get to know Us</h5s>
                        <ul className="list-unstyled">
                            <p>
                            <li>About Commodoro</li>
                            <li>Contact</li>
                            <li>Team</li>
                            <li>Careers</li>
                            </p>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col">
                            <h5s>Why Commodoro</h5s>
                            <ul className="list-unstyled">
                                <p>
                                <li>What is a descentralized market</li>
                                <li>How to buy as a consumer</li>
                                <li>How to sell as a seller</li>
                                <li>About real-time transactions</li>
                                <li>About market analytics</li>
                                </p>
                            </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="col">
                            <h5s>Commodoro social</h5s>
                            <ul className="list-unstyled">
                                <p>
                                <li>LinkedIn</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                </p>
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