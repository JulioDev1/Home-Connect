import { MouseEvent } from "react";

export default interface IOptionsComponent{
    amount:number;
    dataNameEdit:string;
    dataNameDelete:string;  
    onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;  
    onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
}