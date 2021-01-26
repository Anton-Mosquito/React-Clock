import React from 'react';
import ChangeContext from './Models/contextType'



const Context = React.createContext<ChangeContext>({changeTime: time => console.warn('default'), changeZoneTime: zoneTime => console.warn('default')});

export default Context;