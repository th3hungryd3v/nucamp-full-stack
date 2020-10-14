import React, { Component } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import NavComponent from './NavComponent'
import HomeComponent from './HomeComponent'
import OrderComponent from './OrderComponent'


//*****had to run yarn add react react-dom reactstrap
//***had to add react-bootstrap and bootsrap as well */
class MainComponent extends Component {
    render() {
        return (
            <div>
                {/* navbar can go here so we do not have to add it to every page */}
                <NavComponent/>
                <Switch>
                    <Route path='/home' component= {HomeComponent} />
                    <Route exact path='/order' component= {OrderComponent} />
                    <Redirect to='/home'/>
                </Switch>
                {/* foot can go here similar to navbar */}
            </div>
        )
    }
}

export default MainComponent;
