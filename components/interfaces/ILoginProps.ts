import { ChangeEvent } from "react";

export interface ILoginProps {
    value: string;
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    label: string;
    type: string;
    placeholder: string;
  
}