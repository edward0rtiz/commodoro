import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderCust from './components/header/HeaderCust';
import ContentCust from './components/content/ContentCust';
import FooterCust from './components/footer/FooterCust';
import { Layout } from 'antd';

ReactDOM.render(
  <div>
    <Layout>
      <HeaderCust />
      <ContentCust />
      <FooterCust />
    </Layout>
  </div>,
  document.getElementById('root'),
);
