import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SideBar from './SideBar'



class OrderComponent extends Component {
    

    render() {
        return (
            <div>
                Order Component!
                <div>
                    <Link to={'/home'}>Home</Link>
                    <SideBar style={{marginTop:80}}/>
                </div>
            </div>
        )
    }
}
export default OrderComponent;