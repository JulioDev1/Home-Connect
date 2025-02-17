import { MouseEvent, ReactNode } from "react";

export interface IModalComponent{

    toggle:boolean;
    dataName:string;
    children:ReactNode;
    amount?:number;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    onClose: (event: MouseEvent<HTMLButtonElement>) => void;

}