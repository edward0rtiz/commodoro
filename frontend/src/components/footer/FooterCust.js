import React, { Component } from "react";
import 'antd/dist/antd.css';
import './FooterCust.css';
import { Layout } from 'antd';

const { Footer } = Layout;

class FooterCust extends Component {
  render() {
    return (
      <div className="main-footer">
        <Footer >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </div>
    );
  }
}

export default FooterCust;
