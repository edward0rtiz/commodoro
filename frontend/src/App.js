import React from 'react';
import HeaderCust from './components/header/HeaderCust';
import Footer from './components/footer/Footer';
import ContentCust from './components/content/ContentCust';
import './App.scss';

function App() {
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

export default App;
