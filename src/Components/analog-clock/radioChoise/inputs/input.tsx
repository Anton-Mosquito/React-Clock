import React from 'react';
import sprite from "../../../../assets/sprite.svg";
import { IInputProps } from "../../../../Models/analogTime";


export default function Inputs( { forLabel, forId, name, text, id, check, onChange} : IInputProps) {
    return (  
        <label htmlFor={forLabel}>
            {text}
        <input type="radio" name={name} id={forId} onChange={()=> onChange(id, forId)} checked={check}/>
        <svg>
            <use href={sprite + "#off"}></use>
        </svg>
        </label>
        )
}