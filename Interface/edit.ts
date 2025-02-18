import { ChangeEvent, FormEvent, MouseEvent } from "react";
import { Table } from "./Table";

export interface edit{
    onClick:(value: MouseEvent<HTMLButtonElement>)=> void;
    onModal:(value: MouseEvent<HTMLButtonElement>)=> void;  
    dataNameModal:string; 
    handleChange:(value:ChangeEvent<HTMLInputElement>, id?:string)=>void;
    handleSubmit:(value:FormEvent<HTMLFormElement>)=>void;
    dataName:string;
    toggle:boolean;
    toggleSucces:boolean;

    value:Table[];
}