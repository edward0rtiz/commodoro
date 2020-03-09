import React from 'react';

function HeaderConfig(props) {
    const LoginRegHandler = () => {
        const offCanvasConfig = document.querySelector('.off-canvas-cog');
        offCanvasConfig.classList.add('active');
        document.querySelector('body').classList.add('fix');
    }

    const MobileMenuHandler = () => {
        const offCanvasMenu = document.querySelector('.off-canvas-menu');
        offCanvasMenu.classList.add('active');
    }

    return (
        <div className="header-action mt-lg-1 text-right">
            {/* <a href="tel:00199823568658" className="tel-no">+998 23568 658</a> */}
            <button onClick={LoginRegHandler} className="btn-cog"><i className="fa fa-user-circle"/></button>
            {/* <button onClick={MobileMenuHandler} className="btn-menu d-lg-none"><i className="fa fa-bars"/></button> */}
        </div>
    );
}

export default HeaderConfig;