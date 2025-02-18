import { edit } from "@/Interface/edit";
import HeaderFormComponent from "../HeaderFormComponent";
import SideSectionComponent from "../SideSectionComponent";
import Input from "../Input";

const content = [
    {
        name: "name",
        label: "Name",
        placeholder: "Name",
        type: "text"
    },
    {
        name: "email",
        label: "Email",
        placeholder: "Email",
        type: "text"
    },
    {
        name: "cpf",
        label: "Cpf",
        placeholder: "Cpf",
        type: "text"
    },
    {
        name: "id",
        label: "Id",
        placeholder: "id",
        type: "text"
    },
    {
        name: "number",
        label: "number",
        placeholder: "number",
        type: "text"
    },
    {
        name: "location",
        label: "location",
        placeholder: "location",
        type: "text"
    }
]

export default function EditComponent(props: edit) {
    return (
        <SideSectionComponent toggle={props.toggle}>
            <HeaderFormComponent
                onClick={props.onClick}
                dataName={props.dataName}
                title="Edit User"
            />
            <aside className="flex flex-col justify-between gap-7 overflow-auto">
                <form onSubmit={props.handleSubmit} className="flex flex-col pt-2 px-2 gap-8" action="submit">
                    {
                        props.value.map((form, index) => (
                            <div className="flex flex-col pt-4 px-4 bg-slate-50 rounded-lg  gap-8" key={index} >{
                                content.map((i, index) => (
                                    <Input
                                        key={index}
                                        name={i.name}
                                        label={i.label}
                                        placeholder={i.placeholder}
                                        type={i.type}
                                        value={form[i.name as keyof typeof form] || ""}
                                        onChange={(e) => props.handleChange(e, form.id)}
                                    />
                                ))}
                            </div>
                        ))
                    }
                    <button onClick={props.onModal} data-name={props.dataNameModal} className="bg-black text-white p-2 rounded-md">Submit</button>
                </form>
            </aside>
        </SideSectionComponent>
    )
}