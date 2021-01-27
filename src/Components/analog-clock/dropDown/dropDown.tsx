import React, { ChangeEvent, useContext } from 'react';
import './style.css';
import OprionForDropDown from "./options/option";
import Context from '../../../context';
import ChangeContext from '../../../Models/contextType';
import momentTZ from 'moment-timezone';

export default function DropDown() {
    
    const {changeZoneTime} = useContext<ChangeContext>(Context);
    
    const zone = momentTZ.tz.names();

    const changeZone = (event: ChangeEvent<HTMLSelectElement>) =>{
        const select = event.target.selectedIndex;
        const options = event.target.options;
        changeZoneTime(options[select].value)
    }

    return (
        <p className="date__time-wrapper-drop">
            <select className="towns" onChange={changeZone}>
                {zone.map((params:any ,index:number)=> <OprionForDropDown key={index} zone={params}/>)}
            </select>
        </p>
    )
}