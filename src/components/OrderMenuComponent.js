import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OrderMenuComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        Order Menu Component!
        <div>
          <Link to={'/home'}>Home</Link>
        </div>
      </div>
    );
  }
}

export default OrderMenuComponent;
