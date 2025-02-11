import { navButton } from "@/Interface/navButton";

export default function NavButton(props:navButton){

    return (
        <button 
            onClick={props.onClick} 
            className="flex items-center justify-center bg-black text-white justify-items-center gap-3 p-2  w-72 h-10 rounded-lg" 
        >
            {props.placeholder}
        </button>
        )
    
}