import { MouseEvent } from "react";

export interface navButton{
    placeholder?:string;
    dataName?:string;
    title?:string;
    onClick:(value: MouseEvent<HTMLButtonElement>)=> void;
}