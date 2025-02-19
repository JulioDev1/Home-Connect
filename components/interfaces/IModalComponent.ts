import { MouseEvent, ReactNode } from "react";

export interface IModalComponent{

    toggle:boolean;
    dataName:string;
    children:ReactNode;
    amount?:number;
    description?:string;
    title?:string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    onClose: (event: MouseEvent<HTMLButtonElement>) => void;
}