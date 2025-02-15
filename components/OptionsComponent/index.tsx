import Pencil from "@/public/Pencil";
import IOptionsComponent from "../interfaces/IOptionsComponent";
import Trash from "@/public/Trash";

export default function OptionComponent(props: IOptionsComponent) {
    return (
        <div className={props.amount > 0 ? "w-11/12 flex items-center rounded justify-between p-3 bg-white h-12 pl-4 font-semibold"
            : "hidden"}>
            {props.amount} rows selected
            <div className="flex gap-3">
                <span className="flex items-center gap-1 text-black">
                    <Pencil />
                    Edit
                    <span className="text-black">( {props.amount} )</span>
                </span>

                <span className="flex items-center gap-1 text-red-600">
                    <Trash />
                    Delete <span className="text-red-600"> ( {props.amount} ) </span>
                </span>
            </div>
        </div>
    )
}