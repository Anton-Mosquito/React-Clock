import React from 'react';
import { IDigitalArrow } from "../../../Models/digitalTime";

export default function Arrow ({nameMain , nameSecondary, value}: IDigitalArrow) {    
    
    const rotate = `rotateZ(${value}deg)`;

    return (
    <div className={nameMain}>
        <div className={nameSecondary}  style={{transform: rotate}}></div>
    </div>
    );
}