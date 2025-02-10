import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { MouseEvent } from "react";

export interface button{
    placeholder:string;
    onClick:(value: MouseEvent<HTMLButtonElement>)=> void;
    imageUrl?: string | StaticImport;
    color?: string;
    dataName?:string;
}