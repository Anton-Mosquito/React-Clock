import React, { useEffect, useState } from 'react';
import {IDigitalTime} from '../../Models/digitalTime';
import { Arrow } from './arrow/arrow';
import './styles.css';


export const ClockDigital: React.FC = () => {
  
  const deg = 6;
  const day = new Date();

  const [ time , setTime ] = useState<IDigitalTime[]>([
    {id : 1, value : (((day.getHours() * 30) + (day.getMinutes() * deg / 12) )), nameMain : 'hours', nameSecondary : 'hr' },
    {id : 2, value : (day.getMinutes() * deg) , nameMain : 'minuts', nameSecondary : 'mn'},
    {id : 3, value : (day.getSeconds() * deg) , nameMain : 'seconds', nameSecondary : 'sec'},
  ]);
  
  useEffect(() => {
    const timerID = setInterval( () => tick(), 1000 );
    
    return function cleanup() {
      clearInterval(timerID);
    };
  });
  
  const tick = () => {
    const hour = day.getHours() * 30;
    const minutes = day.getMinutes() * deg;
    const seconds = day.getSeconds() * deg;
    const shiftHour = hour + (minutes / 12);
    
    setTime([
      {id : 1, value : shiftHour,  nameMain : 'hours', nameSecondary : 'hr' },
      {id : 2, value : minutes,  nameMain : 'minuts', nameSecondary : 'mn' },
      {id : 3, value : seconds,  nameMain : 'seconds', nameSecondary : 'sec' },
    ]);
  };
  
  return (
  <div className='clock'>
    {time.map(( info: IDigitalTime) => <Arrow key={info.id} {...info}/>)}
  </div>
  );
}