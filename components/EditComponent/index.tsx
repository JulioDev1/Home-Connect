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
            <div>
                <HeaderFormComponent
                    onClick={props.onClick}
                    dataName={props.dataName}
                    title="Edit User"
                />
                <form onSubmit={props.handleSubmit} className="flex flex-col gap-8" action="">{
                    props.value.map((form, index)=>(
                    <div key={index}>
                    {
                        content.map((i) => (
                            <Input
                                name={i.name}
                                label={i.label}
                                placeholder={i.placeholder}
                                type={i.type}
                                value={form[i.name as keyof typeof form] || ""}
                                onChange={(e)=> props.handleChange(e, form.id)}
                            /> 
                        ))
                    }
                    </div>
                ))}
                <button className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
                </form>
            </div>
        </SideSectionComponent>
    )
}