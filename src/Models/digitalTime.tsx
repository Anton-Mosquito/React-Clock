interface IDigitalTime {
    id: number;
    value: number;
    nameMain : string;
    nameSecondary: string;
}

interface IDigitalArrow {
    nameMain: string;
    nameSecondary: string;
    value: number;
}

export type { IDigitalTime, IDigitalArrow};