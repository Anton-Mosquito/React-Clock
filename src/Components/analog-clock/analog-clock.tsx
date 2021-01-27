import React, { useEffect, useState } from 'react';
import './styles.css';
import DigitsSection from './digits-sections/digits';
import DropDown from "./dropDown/dropDown";
import {IAnalogTime} from '../../Models/analogTime';
import RadioChoise from './radioChoise/radioChoise';
import Context from '../../context';
import moment from 'moment';

let format : string = 'HH';
let zone: string = 'Europe/Kiev';



export default function ClockAnalog() {
  const hours = moment.tz(zone).format(format);
  const minutes = moment.tz(zone).format('mm');
  const seconds = moment.tz(zone).format('ss');
  
  
  const [ time , setTime ] = useState<IAnalogTime[]>([
        {id : 1, value : hours, name : 'Hours' },
        {id : 2, value : minutes, name : 'Minutes' },
        {id : 3, value : seconds, name : 'Seconds' },
      ]);
      
    useEffect(() => {
      const timerID = setInterval( () => tick(), 1000 );
      
      return function cleanup() {
        clearInterval(timerID);
      };
    });
    
    const tick = () => {      
      setTime([
        {id : 1, value : hours, name : 'Hours' },
        {id : 2, value : minutes, name : 'Minutes' },
        {id : 3, value : seconds, name : 'Seconds' },
      ]);
    }

    const changeTime = (value :string) => {
      if (value === '12'){
        format = 'hh';
        };
      if (value === '24'){
        format = 'HH';
        };
    }

    const changeZoneTime = (value : string) => { 
      zone = value;
    }

    return (
      <Context.Provider value={{changeTime : changeTime, changeZoneTime : changeZoneTime}}>
        <div className='date__time-wrapper'>
            <div className='date__time-wrapper-time'>
                {time.map(( info: IAnalogTime) => {
                    return <DigitsSection key={info.id} {...info}/>
                    })}
            </div>
            <DropDown/>
            <RadioChoise/>
        </div>
      </Context.Provider>
    );
  }