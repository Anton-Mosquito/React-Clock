import React, { useEffect, useState } from 'react';
import './styles.css';
import DigitsSection from './digits-sections/digits';
import DropDown from "./dropDown/dropDown";
import {IAnalogTime} from '../../Models/analogTime';
import RadioChoise from './radioChoise/radioChoise';
import Context from '../../context';
import moment from 'moment';

let format : string = 'HH';
let offset : number = 0;



export default function ClockAnalog() {
  const timeNormilize = (digits :number) => {
    return digits < 10 ? '0' + Math.abs(digits) : '' + Math.abs(digits);
  };

  let hours = timeNormilize(Number(moment(new Date()).format(format)) - offset);
  let minutes = timeNormilize(Number(moment(new Date()).format('mm')));
  let seconds = timeNormilize(Number(moment(new Date()).format('ss')));
  
  
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
      const now = moment().valueOf();
      const nowZone = moment.tz.zone('Europe/Kiev')?.utcOffset(now)!;
      const offsetMinutes = moment.tz.zone(value)?.utcOffset(now)!;
      offset = (offsetMinutes - nowZone) / 60;
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