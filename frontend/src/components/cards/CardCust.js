import React, { Component } from "react";
import 'antd/dist/antd.css';
import './CardCust.css';
import { Card } from 'antd';

class CardCust extends Component {
  render() {
    return (
      <div className="itemCard">
        <Card title="Default size card">
          <p>{this.props.message}</p>
        </Card>
      </div>
    );
  }
}

export default CardCust;
