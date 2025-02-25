import Image from "next/image";
import Close from "../../public/X.png";
import { navButton } from "@/Interface/navButton";
export default function HeaderFormComponent(props:navButton){
    return (
        <header className="flex w-full justify-between pb-3 border-t-gray-200 border-b">
            <h1 className="font-bold text-2xl w-fit">{props.title}</h1>
            <button onClick={props.onClick} data-name={props.dataName}>
                <Image 
                    alt="close"
                    src={Close}
                />
            </button>
        </header>
    )
}