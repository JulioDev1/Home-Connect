'use client'
import { useRouter } from "next/navigation";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import { ChangeEvent, MouseEvent, useState } from "react";
import { toggle } from "@/Interface/toggle";
import FormComponent from "@/components/FormComponent";

export default function TaskList(){
    const router = useRouter();
    const [value, setValue] = useState({
        search:"",
    });

    const[toggle, setToggle] = useState<{[key:string]:boolean}>({})

     
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        
        setValue((prev) => {
            const data = { ...prev, [name]: value };
            return data;
        });
    }

    function toggleButton(event: MouseEvent<HTMLButtonElement>){
        const name= event.currentTarget.dataset.name;

        if(!name) return;
        
        setToggle((prev)=>{
            const data = {...prev, [name]: prev[name] ? false : true}
            return data;
        });
        console.log("Botão:", name, "Novo estado:", !toggle[name]);

    }
    return(
        <section className="h-screen">
            <div className="flex h-full">

                <SideBar onClick={() => router.push("/task-list")}/>
                <div className="p-2 w-full">

                    <NavBar
                        amount={10}
                        handleChange={handleChange}
                        handleClick={toggleButton}
                        name="search"
                        dataSet="close"
                        value={value}
                    />
                </div>

                    <FormComponent 
                        dataName="close"
                        handleClick={toggleButton}
                        toggle={toggle["close"]}
                        handleChange={handleChange}
                        value=""
                    />
            </div>
        </section>
    )
}