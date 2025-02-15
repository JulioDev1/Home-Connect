import { Side } from "@/Interface/Side";

export default function SideSectionComponent(props:Side){

    return (
        <section className={
            props.toggle ? "w-full h-full z-10 bg-black bg-opacity-5 absolute flex justify-end" 
            : "hidden"
            
        }  >
            <div className="relative p-2 h-full w-96  bg-white bg-opacity-100 transition-all duration-300 flex flex-col justify-between">

                {props.children}
            </div>
        </section>
    )
}