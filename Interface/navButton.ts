import { MouseEvent } from "react";

export interface navButton{
    placeholder?:string;
    onClick:(value: MouseEvent<HTMLButtonElement>)=> void;
}