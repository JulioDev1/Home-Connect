import { MouseEvent } from "react";

export interface navButton{
    placeholder?:string;
    dataName?:string
    onClick:(value: MouseEvent<HTMLButtonElement>)=> void;
}