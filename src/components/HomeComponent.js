import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class HomeComponent extends Component {
    render() {
        return (
            <div>
                HomePage
                <div>
                <Link to={'/order'}>Order</Link>
                </div>
            </div>
        )
    }
}

export default HomeComponent
