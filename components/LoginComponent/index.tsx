import Button from "../Button";
import Input from "../Input";
import { ILoginComponents } from "../interfaces/ILoginComponent";

export default function LoginComponent(props:ILoginComponents){
    

    return (
        <form action="/task-list" className="flex gap-4 justify-center items-center flex-col h-96 w-96 bg-white border border-neutral-300 rounded-lg p-2">
            <Input
                label="Email" 
                name="email"
                onChange={props.handleChange}
                placeholder="Email"
                type="text"
                value={props.value.email}               
                />
            <Input
                label="Password" 
                name="password"
                onChange={props.handleChange}
                placeholder="Password"
                type="text"
                value={props.value.password}               
            />
            <Button onClick={props.handleClick} placeholder="Login"/>
        </form>
    )
}