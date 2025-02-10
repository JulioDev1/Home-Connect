'use client'
import { useRouter } from "next/navigation";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import { ChangeEvent, useState } from "react";

export default function TaskList(){
    const router = useRouter();
    const [value, setValue] = useState({
        search:"",
        view:false
     });
    
     function handleChange(event: ChangeEvent<HTMLInputElement>) {
            const { name, value } = event.target;
        
            setValue((prev) => {
              const data = { ...prev, [name]: value };
              return data;
            });
        }

    return(
        <section className="h-screen">
            <div className="flex h-full">

                <SideBar onClick={() => router.push("/task-list")}/>
                <div className="p-2 w-full">

                    <NavBar
                        amount={10}
                        handleChange={handleChange}
                        handleClick={()=> (console.log("click"))}
                        name="search"
                        value={value}
                    />
                </div>
            </div>
        </section>
    )
}