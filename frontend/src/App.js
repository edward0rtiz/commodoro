import React from 'react';
import logo from './logo.svg';
import HeaderCust from './components/header/HeaderCust';
import Footer from './components/footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
      <HeaderCust />
    </div>
      <Footer />
    </div>
  );
}

export default App;
