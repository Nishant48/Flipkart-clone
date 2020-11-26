import React from 'react';
import './CSS/CatagoryBar.css';
import Catagory from './Catagory';

function CatagoryBar() {
    return (
        <div className="catagorybar">
            <div className="extra" />
            <Catagory title="Electronics" />
            <Catagory title="TVs and Appliances" />
            <Catagory title="Men" />
            <Catagory title="Women" />
            <Catagory title="Babys and Kids" />
            <Catagory title="Home and Furniture" />
            <Catagory title="Sports and Books" />
            <Catagory title="Flights" />
            <div className="extra" />
        </div>
    )
}

export default CatagoryBar;
