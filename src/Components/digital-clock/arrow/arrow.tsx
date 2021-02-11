import React from 'react';
import { IDigitalArrow } from "../../../Models/digitalTime";

export const Arrow: React.FC<IDigitalArrow> = ({nameMain , nameSecondary, value}) => {    
    
    const rotate = `rotateZ(${value}deg)`;

    return (
    <div className={nameMain}>
        <div className={nameSecondary}  style={{transform: rotate}}></div>
    </div>
    );
}