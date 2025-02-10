import { MouseEvent } from "react";

export interface button{
    placeholder:string;
    onClick:(value: MouseEvent<HTMLButtonElement>)=> void    
}