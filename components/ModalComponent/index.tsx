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
                    <span className="size-14 flex justify-center rounded-xl items-center p-2 bg-red-100">
                        {props.children}
                    </span>
                    <div className="flex flex-col items-center w-full">
                        <h1 className="font-bold text-xl">
                            Delete {props.amount} items
                        </h1>
                        <span className="font-normal">
                            Are you want delete {props.amount} items ?
                        </span>
                    </div>
                    <div className="flex justify-center gap-2 w-full">
                        <button data-name={props.dataName} onClick={props.onClose} className="w-full font-bold rounded-md border border-gray-200 h-11">Cancel</button>
                        <button className="bg-rose-600 rounded-md w-full h-11 text-white">Delete</button>
                    </div>
                </nav>
            </div>



        </section>
    )

}