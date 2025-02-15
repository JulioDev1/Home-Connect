"use client"
import { useRouter } from "next/navigation";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import { ChangeEvent, MouseEvent, useState, FormEvent } from "react";
import FormComponent from "@/components/FormComponent";
import TableComponent from "@/components/TableComponent";
import { Table } from "@/Interface/Table";
import OptionComponent from "@/components/OptionsComponent";
import MainContainer from "@/components/MainContainer";
import PageSection from "@/components/PageSection";
import EditComponent from "@/components/EditComponent";

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

    function handleCheckBoxChange(event: ChangeEvent<HTMLInputElement>)
    {
      
      const {checked, id } = event.target;
     
      setSelected((prev)=> checked ? [...prev, id] : prev.filter((item)=> item !== id));   
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
        <PageSection>
            <MainContainer>
                <SideBar onClick={() => router.push("/task-list")}/>
                <div className="px-8 w-full mt-16 flex flex-col items-center gap-5">

                    <NavBar
                        amount={table.length}
                        handleChange={handleChange}
                        handleClick={toggleButton}
                        name="search"
                        dataSet="close"
                        value={value}
                    />
                    <OptionComponent 
                        onClickEdit={toggleButton} 
                        dataNameEdit="edit-open" 
                        amount={select.length} 
                    />
                    <TableComponent
                        select={select}
                        handleCheckBoxChange={handleCheckBoxChange}
                        data={table}
                    />
                </div>
                <EditComponent
                    onClick={toggleButton}
                    toggle={toggle["edit-open"]}
                    dataName="edit-open"
                />
                <FormComponent 
                    handleClick={toggleButton}
                    handleSubmit={handleAddSubmit}
                    handleChange={handleChangeForm}
                    value={data}
                    dataName="close"
                    toggle={toggle["close"]}
                />
            </MainContainer>
        </PageSection>
    )
}