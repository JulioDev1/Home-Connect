import { ChangeEvent } from "react";

export interface ILoginComponents {
    value:{
        email:string;
        password:string;
    };
    handleChange: (value: ChangeEvent<HTMLInputElement>) => void;
}