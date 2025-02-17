import { ChangeEvent, EventHandler, FocusEvent } from "react";

export interface ILoginProps {
    value: string;
    onChange: (value: ChangeEvent<HTMLInputElement>, id?:string) => void;
    label?: string;
    name: string;
    type: string;
    placeholder: string;
  
}