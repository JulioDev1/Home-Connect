import { MouseEvent } from "react";

export default interface IOptionsComponent{
    amount:number;
    dataNameEdit:string;
    onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
}