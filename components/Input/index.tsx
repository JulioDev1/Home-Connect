import { ILoginProps } from "../interfaces/ILoginProps";

export default function Input(props:ILoginProps){

    return (
        <div className="flex flex-col w-4/5">
            <label className="font-bold">{props.label}</label>
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