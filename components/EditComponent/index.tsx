import { edit } from "@/Interface/edit";
import HeaderFormComponent from "../HeaderFormComponent";
import SideSectionComponent from "../SideSectionComponent";

export default function EditComponent(props:edit){
    return (
        <SideSectionComponent  toggle={false}>
            <HeaderFormComponent 
                onClick={props.onClick} 
                dataName={props.dataName} 
                title="Edit User"
            />
            
        </SideSectionComponent>
    )
}