"use client"
import { useRouter } from "next/navigation";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import { ChangeEvent, MouseEvent, useState, FormEvent } from "react";
import FormComponent from "@/components/FormComponent";
import TableComponent from "@/components/TableComponent";
import { Table } from "@/Interface/Table";
import { ITableProps } from "@/components/interfaces/ITableProps";

export default function TaskList(){
    const router = useRouter();
    const [data, setData] = useState<Table>({
        name:"",
        email:"",
        cpf:"",
        number:"",
        location:"",

    });
    const [value, setValue] = useState({
        search:"",
    });
    const[toggle, setToggle] = useState<{[key:string]:boolean}>({})
    
    const[table, setTable] = useState<Table[]>([]);
    const [select, setSelected] = useState<string[]>([])    


    function handleAddSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();

        
        Object.fromEntries(Object.keys(data).map((d)=> ["", d]));
        
        setTable([...table, data]);
    }

     
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        
        setValue((prev) => {
            const data = { ...prev, [name]: value };
            return data;
        });
    }
      
    function handleChangeForm(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        
        setData((prev) => {
            const data = { ...prev, [name]: value };
            return data;
        });
    }

    function handleSelect(selectedId:string[])
    {
        setSelected(selectedId)      
        console.log(select)
    }

    function toggleButton(event: MouseEvent<HTMLButtonElement>){
        const name= event.currentTarget.dataset.name;

        if(!name) return;
        
        setToggle((prev)=>{
            const data = {...prev, [name]: prev[name] ? false : true}
            return data;
        });

    }

    return(
        <section className="h-screen">
            <div className="flex h-full">

                <SideBar onClick={() => router.push("/task-list")}/>
                <div className="p-2 w-full flex flex-col items-center">

                    <NavBar
                        amount={table.length}
                        handleChange={handleChange}
                        handleClick={toggleButton}
                        name="search"
                        dataSet="close"
                        value={value}
                    />
                    <TableComponent
                        onSelectionChange={handleSelect}
                        data={table}
                    />
                </div>

                <FormComponent 
                    handleClick={toggleButton}
                    handleSubmit={handleAddSubmit}
                    handleChange={handleChangeForm}
                    value={data}
                    dataName="close"
                    toggle={toggle["close"]}
                />
            </div>
        </section>
    )
}