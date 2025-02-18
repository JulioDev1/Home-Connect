import Image from "next/image";
import { IModalComponent } from "../interfaces/IModalComponent";
import Close from "../../public/X.png";

export default function ModalComponent(props: IModalComponent) {
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
                    <span className={`size-14 flex justify-center rounded-xl items-center p-2${props.amount! > 0 ? 
                        `bg-red-100`: 
                        `bg-green-100`}`
                    }>
                        {props.children}
                    </span>
                    <div className="flex flex-col items-center w-full">
                        <h1 className="font-bold text-xl">
                            {props.title}
                        </h1>
                        <span className="font-normal">
                            {props.description}
                        </span>
                    </div>
                    <div className="flex justify-center gap-2 w-full">

                        <button data-name={props.dataName} onClick={props.onClose} className={`${props.amount! > 0 ? `border-gray-200 w-full`
                            :
                            `bg-black text-white w-1/2`}font-bold rounded-md border  h-11`}>{props.amount! > 0 ? "Cancel" : "Close"
                            }
                        </button>
                        <button data-name={props.dataName} onClick={props.onClick} className={props.amount! > 0 ? "bg-rose-600 rounded-md w-full h-11 text-white" : "hidden"}>
                            Delete {props.amount} items
                        </button>
                    </div>
                </nav>
            </div>



        </section>
    )

}