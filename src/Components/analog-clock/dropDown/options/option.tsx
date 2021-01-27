import React from 'react';
import {IOprionProps} from '../../../../Models/analogTime';


export default function OprionForDropDown({ zone }: IOprionProps) {
    return (
        <option value={zone}>{zone}</option>
    )
}