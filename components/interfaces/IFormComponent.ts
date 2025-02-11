import { ChangeEvent, FormEvent, MouseEvent } from "react";

export interface IFormComponent{
    handleChange: (value: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit:(e:FormEvent<HTMLFormElement>) => void;
    handleClick:(e:MouseEvent<HTMLButtonElement>)=> void;
    toggle:boolean
    dataName:string;
    value:{
        name:string;
        email:string;
        cpf:string;
        number:string;
        location:string;
    };
}