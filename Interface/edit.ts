import { MouseEvent } from "react";

export interface edit{
    onClick:(value: MouseEvent<HTMLButtonElement>)=> void;
    dataName:string;
    toggle:boolean;
}