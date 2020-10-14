import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class OrderComponent extends Component {
    render() {
        return (
            <div>
                Order Component!
                <div>
                    <Link to={'/home'}>Home</Link>
                </div>
            </div>
        )
    }
}
export default OrderComponent;
