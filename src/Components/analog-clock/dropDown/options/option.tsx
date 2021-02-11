import React from 'react';
import {IOprionProps} from '../../../../Models/analogTime';


export const OprionForDropDown: React.FC<IOprionProps> = ({ zone }) => {
    return (
        <option value={zone}>{zone}</option>
    )
}