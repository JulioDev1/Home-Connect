import { IUnique } from "../interfaces/IUniqueInput"

export default function InputUnique(props:IUnique){
    return (
        <div className="flex flex-col w-full">
            <input 
                className="border p-4 border-neutral-300 font-normal w-full h-10 rounded-lg"
                value={props.value}
                onChange={props.onChange}
                name ={props.name}
                type = {props.type}
                placeholder = {props.placeholder}
            />
        </div>
    )
}