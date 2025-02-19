import { MouseEvent, ReactNode } from "react";
import Close from "../../public/X.png";
import Image from "next/image";

export interface IWarnComponent{

    toggle:boolean;
    dataName:string;
    children:ReactNode;
    amount?:number;
    title?:string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    onClose: (event: MouseEvent<HTMLButtonElement>) => void;
}
export default function WarnComponent(props:IWarnComponent){
    return (
        <section className={
            props.toggle ? "w-full h-full z-10 bg-black bg-opacity-5 absolute flex justify-center items-center"
                : "hidden"
        }>
            <div className="relative p-4 h-64 w-96 rounded-xl bg-white bg-opacity-100 transition-all duration-300 flex flex-col ">
                <button data-name={props.dataName} onClick={props.onClose} className="flex justify-end w-full">
                    <Image
                        alt="close"
                        width={16}
                        height={16}
                        src={Close}
                    />
                </button>
                <nav className="flex flex-col justify-between h-full items-center">
                    <span className="size-14 flex justify-center rounded-xl items-center bg-green-100">                        
                        {props.children}
                    </span>
                    <div className="flex flex-col items-center w-full">
                        <h1 className="font-bold text-xl">
                            {props.title}
                        </h1>
                       
                    </div>
                    <div className="flex justify-center gap-2 w-full">
                        <button data-name={props.dataName} onClick={props.onClose} className="border-gray-200 bg-black text-white font-bold rounded-md border w-32  h-11">
                            close
                        </button>
                    </div>
                </nav>
            </div>



        </section>
    )
}