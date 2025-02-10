import { ChangeEvent, MouseEvent } from "react";

export interface ILoginComponents {
    value:{
        email:string;
        password:string;
    };
    handleChange: (value: ChangeEvent<HTMLInputElement>) => void;
    handleClick : (value: MouseEvent<HTMLButtonElement>)=> void;
}