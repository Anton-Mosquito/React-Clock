import React from 'react';
import sprite from "../../../../assets/sprite.svg";
import { IInputProps } from "../../../../Models/analogTime";


export const Inputs: React.FC<IInputProps> = ({ forLabel, forId, name, text, id, check, onChange}) => {
    return (  
    <label htmlFor={forLabel}>
        {text}
        <input type="radio" name={name} id={forId} onChange={onChange.bind(null, id, forId)} checked={check}/>
        <svg>
            <use href={sprite + "#off"}></use>
        </svg>
    </label>
    )
}