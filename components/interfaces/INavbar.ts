import { ChangeEvent, MouseEvent } from "react";

export interface INavbar{
    value:{
        search:string;
    };
    amount:number;
    name:string;
    dataSet?:string;
    handleChange: (value: ChangeEvent<HTMLInputElement>) => void;
    handleClick : (value: MouseEvent<HTMLButtonElement>)=> void;
}