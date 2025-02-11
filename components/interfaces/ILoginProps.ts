import { ChangeEvent } from "react";

export interface ILoginProps {
    value: string;
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    name: string;
    type: string;
    placeholder: string;
  
}