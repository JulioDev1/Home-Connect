import { ChangeEvent, MouseEvent } from "react";
import { Table } from "./Table";

export interface edit{
    onClick:(value: MouseEvent<HTMLButtonElement>)=> void;
    handleChange:(value:ChangeEvent<HTMLInputElement>, id?:string)=>void;
    dataName:string;
    toggle:boolean;
    value:Table[];
}