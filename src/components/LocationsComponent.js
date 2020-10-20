import React from "react";
import {
    Card,
    CardText,
    CardBody,
    Breadcrumb,
    BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

//import { baseUrl } from '../shared/baseUrl'; if use local host

function RenderLocation({ location }) {
    return (
        <div > 
        <Card className="">
            <Link to={`/locations/${location.id}`}>
                    <CardBody>
                        <div className="row">
                            <div className="col-md-5">
                                <h1> GOOGLE MAP</h1>
                                <p>will embed google map here</p>
                            </div>    
                            <div className="col-md-7">
                                <CardText>{location.address}</CardText>
                                <CardText>{location.hours}</CardText>
                                <CardText>{location.phoneNum}</CardText>
                            </div>
                        </div>
                       
                </CardBody> 
            </Link>
        </Card>
        </div>  
    );
}

function LocationsComponent(props) {
    const locations = props.locations.map((location) => {
        return (
            <div key={location.id} className="m-3"> 
                <RenderLocation location={location} />
            </div>
        );
    });

    //loading

    //error

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Locations</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Our Locations</h2>
                    <hr />
                </div>
            </div>

            <div className="row">
                <div className="col">
                {locations}
                </div>
            </div>
        </div>
    );
}

export default LocationsComponent;
