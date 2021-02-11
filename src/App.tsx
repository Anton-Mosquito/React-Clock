import React from 'react';
import './App.css';
import { Header } from './Components/header/header'
import { ClockAnalog } from "./Components/analog-clock/analog-clock";
import { ClockDigital } from "./Components/digital-clock/digital-clock";


export const App:React.FC = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <div className='wrapper__clock'>
        <ClockAnalog/>
        <ClockDigital/>
        </div>
    </div>
  );
}

export default App;
