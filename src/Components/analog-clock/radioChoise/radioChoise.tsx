import React, { useContext, useState } from 'react';
import './style.css';
import Inputs from './inputs/input';
import Context from '../../../context';
import ChangeContext from '../../../Models/contextType';



export default function RadioChoise() {
    const {changeTime} = useContext<ChangeContext>(Context);

    const [ radio , setRadio ] = useState([
        {id : 1, forLabel :'24', forId : '24' , name: 'choise' , text: '24-hour clock', check : true},
        {id : 2, forLabel : '12', forId : '12', name: 'choise' ,  text: '12-hour clock', check : false},
    ]);

    const change = (id:number, value : string) => {
        setRadio( radio.map(radio => {
            if (radio.id === id) radio.check = !radio.check
            else radio.check = !radio.check
            return radio;
        }));
        changeTime(value);
    }

    return (
        <form action="" className="radioChose">
            {radio.map(( params:any) => {
                return <Inputs key={params.id} {...params} onChange={change}/>
                })}
      </form>
    )
}