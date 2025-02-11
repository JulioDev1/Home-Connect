import { ChangeEvent } from "react";

export interface IUnique{
    name: string;
    type: string;
    placeholder: string;
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
    value:string;
}