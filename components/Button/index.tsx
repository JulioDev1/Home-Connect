import { button } from "@/Interface/button";

export default function  Button(props:button){
    return(
        <button  className="bg-black text-white w-4/5 h-10 rounded-lg">
            {props.placeholder}
        </button>
    )

}