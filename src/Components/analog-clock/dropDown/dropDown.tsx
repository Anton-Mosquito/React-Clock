import React, { ChangeEvent, useCallback, useContext } from 'react';
import './style.css';
import { OprionForDropDown } from "./options/option";
import Context from '../../../context';
import ChangeContext from '../../../Models/contextType';
import momentTZ from 'moment-timezone';

export const DropDown: React.FC = () => {
    
    const {changeZoneTime} = useContext<ChangeContext>(Context);
    
    const zone = momentTZ.tz.names();

    const changeZone = useCallback((event: ChangeEvent<HTMLSelectElement>) =>{
        const select = event.target.selectedIndex;
        const options = event.target.options;
        changeZoneTime(options[select].value)
    },[changeZoneTime]);

    return (
        <p className="date__time-wrapper-drop">
            <select className="towns" onChange={changeZone}>
                {zone.map((params: string ,index: number)=> <OprionForDropDown key={index} zone={params}/>)}
            </select>
        </p>
    )
}