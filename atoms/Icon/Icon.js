import React from "react";
//import rightArrow from '../../assets/icons/right-arrow.svg';
import getIconsList from "./IconList";
const Icon = ({ type }) => 
    <div>
        <img src={getIconsList(type)}></img>
    </div>;


export default Icon;