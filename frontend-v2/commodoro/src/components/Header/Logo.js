import React, {Component} from 'react';
import logo from '../../assets/img/commodoro_logo.png'
import './Logo.scss'

class Logo extends Component {
    render() {
        return (
            <div className="logo-area">
                <a href="/"><img src={logo} alt="commodoro-Logo" /></a>
            </div>
        );
    }
}

export default Logo;