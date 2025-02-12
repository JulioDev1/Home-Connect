import Button from "../Button";
import Input from "../Input";
import { IFormComponent } from "../interfaces/IFormComponent";
import next from "../../public/next.png";
import { FormEvent, MouseEvent, useState } from "react";
import NavButton from "../NavButton";
import HeaderFormComponent from "../HeaderFormComponent";

export default function FormComponent(props:IFormComponent){

    const [nextOrPrev, setNextPrev ] = useState<number>(1);
    

    const inputArray = 
    [
        {
            id:1,
            content:[
                { 
                    name:"name", 
                    label:"Name",
                    placeholder:"Name",
                    type:"text"
                },
                {
                    name:"email", 
                    label:"Email",
                    placeholder:"Email",
                    type:"text"
                },
                {
                    name:"cpf", 
                    label:"Cpf",
                    placeholder:"Cpf",
                    type:"text"
                },
                {
                    name:"id", 
                    label:"Id",
                    placeholder:"id",
                    type:"text"
                },

            ]
        },
        {
            id:2,
            content:[
                { 
                    name:"number", 
                    label:"number",
                    placeholder:"number",
                    type:"text"
                }
            ]
        },
        {
            id:3,
            content:[
                { 
                    name:"location", 
                    label:"location",
                    placeholder:"location",
                    type:"text"
                }
            ]
        }

    ]
    
    const filterFieldById = inputArray.find((i)=> i.id == nextOrPrev);

  
    function nextform(){
        if (nextOrPrev > 2){
            props.handleSubmit({ preventDefault: () => {} } as FormEvent<HTMLFormElement>);
            return setNextPrev((next)=> next+=0);
        }
             
        return setNextPrev((next)=> next +=1);
    }

    function prevForm(){
        if (nextOrPrev < 2){
            return setNextPrev((next)=> next+=0) ;
        }        
        return setNextPrev((next)=> next -=1);
    }

    return(
        <section className={
            props.toggle ? "w-full h-full z-10 bg-black bg-opacity-5 absolute flex justify-end" 
            : "hidden"
            
        }  >
            <div className="relative p-2 h-full w-96  bg-white bg-opacity-100 transition-all duration-300 flex flex-col justify-between">
                <HeaderFormComponent dataName={props.dataName} onClick={props.handleClick}/>
                <form className="flex flex-col w-full items-center gap-3" onSubmit={props.handleSubmit}>
                {
                    filterFieldById?.content.map((i, index)=>
                    (                 
                        <Input
                            key={index}
                            onChange={props.handleChange}
                            name={i.name}
                            label={i.label}
                            value={props.value[i.name as keyof typeof props.value]}
                            placeholder={i.placeholder}
                            type="text"
                        />
                    ))
                }
                </form>
                <div className="flex items-center justify-center w-full gap-3 h-10 g-4">
                    <NavButton 
                        onClick={prevForm} 
                        placeholder="Previous"
                    />
                    <NavButton 
                        onClick={nextform} 
                        placeholder="Next"
                    />
                </div>
            </div>
        </section>
    )
}