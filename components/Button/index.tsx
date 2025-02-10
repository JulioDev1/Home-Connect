import { button } from "@/Interface/button";
import Image from "next/image";

export default function  Button(props:button){
    return(
        <button onClick={props.onClick} className={
            props.imageUrl ?
            `${props.color} flex items-center justify-items-center gap-3 p-2  w-full h-10 rounded-lg`
            :"bg-black gap-2  text-white w-4/5 h-4 rounded-lg"
        }>
            {
                props.imageUrl ? (<Image src={props.imageUrl} alt="image" width={24} height={24}/> ) : ""
            }    
            {props.placeholder}
        </button>
    )

}