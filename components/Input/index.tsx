import { ILoginProps } from "../interfaces/ILoginProps";

export default function Input(props:ILoginProps){

    return (
        <div className="flex flex-col w-full">
            <label className="font-bold">{props.label}</label>
            <input 
                className="border p-4  font-normal w-full h-10 rounded-lg"
                onChange={props.onChange}
                name ={props.name}
                type = {props.type}
                value={props.value}
                placeholder = {props.placeholder}
            />
        </div>

        
    )
}