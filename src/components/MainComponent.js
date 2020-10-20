import React, { Component } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import NavComponent from './NavComponent';
import HomeComponent from './HomeComponent';
import OrderComponent from './OrderComponent';
import DrawStrawComponent from './DrawStrawComponent';
import LocationsComponent from './LocationsComponent';
import { LOCATIONS } from '../shared/locations';


//*****had to run yarn add react react-dom reactstrap
//***had to add react-bootstrap and bootsrap as well */
class MainComponent extends Component {
    constructor(props){
        super(props);
    this.state = {
        locations: LOCATIONS
    }
}
    render() {
        return (
            <div>
                {/* navbar can go here so we do not have to add it to every page */}
                <NavComponent/>
                <Switch>
                    <Route path='/home' component= {HomeComponent} />
                    <Route exact path='/order' component= {OrderComponent} />
                    <Route path='/locations' render = {()=> <LocationsComponent locations={this.state.locations}/>}/>
                    <Route exact path='/drawstraw' component={DrawStrawComponent}/>
                    <Redirect to='/home'/>
                </Switch>
                {/* foot can go here similar to navbar */}
            </div>
        )
    }
}

export default MainComponent;
