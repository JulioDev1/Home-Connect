'use client'
import { useRouter } from "next/navigation";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import { ChangeEvent, MouseEvent, useState } from "react";

export default function TaskList(){
    const router = useRouter();
    const [value, setValue] = useState({
        search:"",
    });

    const[toggle, setToggle] = useState<boolean>(false)

     
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        
        setValue((prev) => {
            const data = { ...prev, [name]: value };
            return data;
        });
    }

    function toggleButton(){
        setToggle(toggle ? false : true);
    }
    console.log(toggle);
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
                        value={value}
                    />
                </div>
            </div>
        </section>
    )
}