import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import { DigitsSection } from './digits-sections/digits';
import { DropDown } from "./dropDown/dropDown";
import { IAnalogTime } from '../../Models/analogTime';
import { RadioChoise } from './radioChoise/radioChoise';
import Context from '../../context';
import moment from 'moment';


export const ClockAnalog: React.FC = () => {
  const format = useRef<string>('HH');
  const zone = useRef<string>('Europe/Kiev');

  const hours = moment.tz(zone.current).format(format.current);
  const minutes = moment.tz(zone.current).format('mm');
  const seconds = moment.tz(zone.current).format('ss');
  
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
  };
  
  const changeTime = (value :string) :void => {
    if (value === '12'){
      format.current = 'hh';
    };
    if (value === '24'){
      format.current = 'HH';
    };
  };
  
  const changeZoneTime = (value : string) :void => { 
    zone.current = value;
  };
  
  return (
  <Context.Provider value={{changeTime : changeTime, changeZoneTime : changeZoneTime}}>
    <div className='date__time-wrapper'>
      <div className='date__time-wrapper-time'>
        {time.map(( info: IAnalogTime) => <DigitsSection key={info.id} {...info}/>)}
      </div>
      <DropDown/>
      <RadioChoise/>
    </div>
  </Context.Provider>
  );
}