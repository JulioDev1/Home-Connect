import Image from "next/image";
import Close from "../../public/X.png";
import { navButton } from "@/Interface/navButton";
export default function HeaderFormComponent(props:navButton){
    return (
        <header className="flex w-full justify-between">
            <h1 className="font-bold text-2xl w-fit">User Creation</h1>
            <button onClick={props.onClick}>

                <Image 
                    alt="close"
                    src={Close}
                />
            </button>
        </header>
    )
}