'use client'
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
import MainContent from "@/components/MainContent";
import ModalComponent from "@/components/ModalComponent";
import Trash from "@/public/Trash";
import Complete from "@/public/Complete";

export default function TaskList() {
    const router = useRouter();
    const [data, setData] = useState<Table>({
        id: "",
        name: "",
        email: "",
        cpf: "",
        number: "",
        location: "",

    });
    const [value, setValue] = useState({
        search: "",
    });

    const [toggle, setToggle] = useState<{ [key: string]: boolean }>({})
    const [table, setTable] = useState<Table[]>([]);
    const [select, setSelected] = useState<string[]>([])
    const [selectAction, setSelectAction] = useState<Table[]>([]);
    function handleAddSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        Object.fromEntries(Object.keys(data).map((d) => ["", d]));

        setTable([...table, data]);
    }


    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setValue((prev) => {
            const data = { ...prev, [name]: value };
            return data;
        });
    }

    function handleUpdateChanges(event: ChangeEvent<HTMLInputElement>, id?: string) {
        const { name, value } = event.target;

        setSelectAction((prev) => prev.map((item) =>
            id === item.id ? { ...item, [name]: value } : item
        ))
    }

    function handleChangeForm(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setData((prev) => {
            const data = { ...prev, [name]: value };
            return data;
        });
    }

    function handleCheckBoxChange(event: ChangeEvent<HTMLInputElement>) {
        const { checked, id } = event.target;

        setSelected((prev) => checked ? [...prev, id] : prev.filter((item) => item !== id));
    }

    function toggleButton(event: MouseEvent<HTMLButtonElement>) {
        const name = event.currentTarget.dataset.name;

        if (!name) return;

        setToggle((prev) => {
            const data = { ...prev, [name]: prev[name] ? false : true }
            return data;
        });
    }

    function handleAddRowSelected(event: MouseEvent<HTMLButtonElement>) {
        toggleButton(event);

        var selected = [...table].filter((s) => select.includes(s.id));

        setSelectAction((prev) => {
            const uniqueItems = selected.filter(
                (item) => !prev.some((existing) => existing.id === item.id)
            );

            return [...prev, ...uniqueItems];
        });
    }


    function handleSubmitNewForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const updatedTable = table.map((item) => {
            const matchingItem = selectAction.find((update) => update.id === item.id);
            return matchingItem || item;
        });

        setTable(updatedTable);
        setSelectAction([]);
        setSelected([]);

    }

    function handleDelete(event:MouseEvent<HTMLButtonElement>) {
        toggleButton(event);
        const updatedTable = table.filter((item) => !select.includes(item.id));
        setTable(updatedTable);
        setSelected([]);
    }
    

    return (
        <PageSection>
            <MainContainer>
                <SideBar onClick={() => router.push("/task-list")} />
                <MainContent>

                    <NavBar
                        amount={table.length}
                        handleChange={handleChange}
                        handleClick={toggleButton}
                        name="search"
                        dataSet="close"
                        value={value}
                    />
                    <OptionComponent
                        onClickEdit={handleAddRowSelected}
                        onClickDelete={toggleButton}
                        dataNameEdit="edit-open"
                        dataNameDelete="delete-open"
                        amount={select.length}
                    />
                    <TableComponent
                        select={select}
                        handleCheckBoxChange={handleCheckBoxChange}
                        data={table}
                    />
                </MainContent>
                <ModalComponent
                    amount={select.length}
                    toggle={toggle["delete-open"]}
                    dataName="delete-open"
                    onClick={handleDelete}
                    onClose={toggleButton}
                    children={<Trash height={20} width={30} />}   
                />
                <EditComponent
                    onClick={toggleButton}
                    value={selectAction}
                    handleSubmit={handleSubmitNewForm}
                    handleChange={handleUpdateChanges}
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