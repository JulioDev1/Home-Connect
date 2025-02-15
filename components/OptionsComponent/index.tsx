import IOptionsComponent from "../interfaces/IOptionsComponent";

export default function OptionComponent(props:IOptionsComponent){
    return (
        <div className={props.amount > 0  ? "w-11/12 flex items-center bg-white h-12 pl-4 font-semibold" : "hidden"}>
            {props.amount} rows selected
        </div>
    )
}