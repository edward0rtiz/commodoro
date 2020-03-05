import React from 'react';
import HeaderCust from '../components/header/HeaderCust';
import ContentCust from '../components/content/ContentCust';
import Footer from '../components/footer/Footer';
import './Profile.scss';

function Profile() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <HeaderCust />
        <ContentCust />
      </div>
        <Footer />
    </div>
  );
}

export default Profile;