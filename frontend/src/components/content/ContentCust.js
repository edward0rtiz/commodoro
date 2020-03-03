import React, { Component } from "react";
import 'antd/dist/antd.css';
import './ContentCust.css';
import { Layout, Breadcrumb } from 'antd';
import CardCust from '../cards/CardCust';

const { Content } = Layout;

class ContentCust extends Component {
  render() {
    return (
      <div className="main-header">
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <CardCust message="This is card 1" />
            <br />
            <CardCust message="This is card 2"/>
            <br />
            <CardCust message="This is card 3"/>
            <br />
          </div>
        </Content>
      </div>
    );
  }
}

export default ContentCust;
