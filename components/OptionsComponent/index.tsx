import Pencil from "@/public/Pencil";
import IOptionsComponent from "../interfaces/IOptionsComponent";
import Trash from "@/public/Trash";

export default function OptionComponent(props: IOptionsComponent) {
    return (
        <div className={props.amount > 0 ? "w-full flex items-center rounded justify-between p-3 bg-white h-12 pl-4 font-semibold"
            : "hidden"}>
            {props.amount} rows selected
            <div className="flex gap-3">
                <button 
                    data-name={props.dataNameEdit} 
                    onClick={props.onClickEdit} 
                    className="flex items-center gap-1 text-black"
                >
                    <Pencil />
                    Edit
                    <span className="text-black">( {props.amount} )</span>
                </button>

                <button onClick={props.onClickDelete} className="flex items-center gap-1 text-red-600">
                    <Trash />
                    Delete 
                    <span className="text-red-600"> ( {props.amount} ) </span>
                </button>
            </div>
        </div>
    )
}