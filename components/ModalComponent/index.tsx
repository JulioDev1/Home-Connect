import Image from "next/image";
import { IModalComponent } from "../interfaces/IModalComponent";
import Close from "../../public/X.png";

export default function ModalComponent(props: IModalComponent) {
    return (
        <section className={
            props.toggle ? "w-full h-full z-10 bg-black bg-opacity-5 absolute flex justify-center items-center"
                : "hidden"
        }>
            <div className="relative p-6 h-64 w-96 rounded-xl bg-white bg-opacity-100 transition-all duration-300 flex flex-col ">
                <button data-name={props.dataName} onClick={props.onClose} className="flex justify-end w-full">
                    <Image
                        alt="close"
                        width={16}
                        height={16}
                        src={Close}
                    />
                </button>
                <nav className="flex flex-col justify-between h-full items-center">
                    <span className="size-14 flex justify-center rounded-xl items-center bg-red-100">
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
                    <div className="flex justify-center gap-5 w-full">

                        <button 
                            data-name={props.dataName} 
                            onClick={props.onClose} 
                            className="border-gray-200  text-black w-1/2 font-bold rounded-lg border h-11"
                        >
                            Close
                        </button>
                        <button 
                            data-name={props.dataName} 
                            onClick={props.onClick} 
                            className="border-gray-200 bg-rose-600 text-white w-1/2 font-bold rounded-lg border h-11"
                        >
                            Delete {props.amount} user ?
                        </button>
                       
                    </div>
                </nav>
            </div>
        </section>
    )

}