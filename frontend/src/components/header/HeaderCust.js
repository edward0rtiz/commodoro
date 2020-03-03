import React, { Component } from "react";
import 'antd/dist/antd.css';
import './HeaderCust.css';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

class HeaderCust extends Component {
  render() {
    return (
      <div className="main-header">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Store</Menu.Item>
            </Menu>
          </Header>
      </div>
    );
  }
}

export default HeaderCust;
