import Button from "../Button";
import Input from "../Input";
import { INavbar } from "../interfaces/INavbar";
import PlusCircle from "../../public/add.png";

export default function NavBar(props:INavbar){
    return (
        <header className="w-11/12  flex h-16 justify-between mt-5">
            <h1 className="flex gap-2 items-center font-bold text-3xl">
                Users 
                {
                    props.amount.valueOf() > 0  ? 
                    (<span className="rounded-full flex  text-xs font-bold items-center justify-center size-6 text-white bg-black">{props.amount}</span>)
                        :
                    (<span className="flex-none"></span>)
                }
            </h1>
            <div className="flex items-center gap-2">
                <Input 
                    onChange={props.handleChange} 
                    name={props.name} value={props.value.search} 
                    placeholder="Search by name"
                    type="text"
                />
                <Button 
                    onClick={props.handleClick}
                    dataName={props.dataSet} 
                    placeholder="Add new User"
                    imageUrl={PlusCircle}
                    color="bg-black text-white"
                />
            </div>
        </header>
    )
}