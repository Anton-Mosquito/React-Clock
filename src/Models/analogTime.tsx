interface IAnalogTime {
    id: number;
    value: string;
    name: string;
  }

interface IDigitsProps {
  value: string;
  name : string;
}

interface IOprionProps {
  zone: string;
}

interface IInputProps {
  forLabel : string;
  forId : string;
  name : string;
  text : string;
  id : number;
  check : boolean;
  onChange: (id: number,forId:string ) => void,
}

export type { IAnalogTime, IDigitsProps, IOprionProps, IInputProps};