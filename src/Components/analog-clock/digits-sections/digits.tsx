import React from 'react';
import './style.css';
import {IDigitsProps} from '../../../Models/analogTime';



export const DigitsSection: React.FC<IDigitsProps> =  ({value, name}) =>{
    return (
        <div className='digits__wrapper'>
            <span className='digits__section'>{value}</span>
            <span className='digits__section'>{name}</span>
        </div>
    );
}